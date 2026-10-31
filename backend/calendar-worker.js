// Staged Cloudflare Worker API. Not deployed until service-account credentials
// are configured as Cloudflare secrets and the site's existing build is checked.
const CALENDAR_ID = "0956ca74bb9e30e4a85b0e964d00ebdf99b40f2ab3d0d462380fafee347f5bcc@group.calendar.google.com";
const encoder = new TextEncoder();
const b64url = bytes => btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
const encode = text => b64url(encoder.encode(text));
const json = (data,status=200) => new Response(JSON.stringify(data),{
 status,headers:{"content-type":"application/json; charset=utf-8","cache-control":status===200?"public, max-age=300":"no-store"}
});
async function accessToken(env){
 if(!env.GOOGLE_SERVICE_ACCOUNT_EMAIL||!env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) throw new Error("Calendar credentials not configured");
 const now=Math.floor(Date.now()/1000);
 const header=encode(JSON.stringify({alg:"RS256",typ:"JWT"}));
 const claim=encode(JSON.stringify({iss:env.GOOGLE_SERVICE_ACCOUNT_EMAIL,scope:"https://www.googleapis.com/auth/calendar.events.readonly",aud:"https://oauth2.googleapis.com/token",iat:now,exp:now+3300}));
 const raw=env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g,"\n").replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g,"");
 const binary=Uint8Array.from(atob(raw),c=>c.charCodeAt(0));
 const key=await crypto.subtle.importKey("pkcs8",binary,{name:"RSASSA-PKCS1-v1_5",hash:"SHA-256"},false,["sign"]);
 const signature=b64url(new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5",key,encoder.encode(header+"."+claim))));
 const resp=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:header+"."+claim+"."+signature})});
 if(!resp.ok) throw new Error("Google authentication failed");
 return (await resp.json()).access_token;
}
async function getEvents(token){
 const start=new Date();start.setUTCDate(start.getUTCDate()-8);
 const end=new Date();end.setUTCDate(end.getUTCDate()+140);
 let next,events=[];
 do {
  const url=new URL("https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(CALENDAR_ID)+"/events");
  url.searchParams.set("timeMin",start.toISOString());url.searchParams.set("timeMax",end.toISOString());
  url.searchParams.set("singleEvents","true");url.searchParams.set("maxResults","250");
  if(next)url.searchParams.set("pageToken",next);
  const response=await fetch(url,{headers:{authorization:"Bearer "+token}});
  if(!response.ok)throw new Error("Google Calendar request failed");
  const data=await response.json();
  events.push(...(data.items||[]));next=data.nextPageToken;
 }while(next && events.length<1000);
 return events;
}
function parseFields(description=""){
 const fields={};
 for(const line of description.split(/\r?\n/)){
  const match=line.match(/^([A-Z_]+):\s*(.*?)\s*$/);
  if(match)fields[match[1]]=match[2];
 }
 return fields;
}
function publicEvents(events){
 return events.filter(x=>x.status!=="cancelled").map(x=>{
  const f=parseFields(x.description);
  if(f.TYPE==="exhibition-booking" && f.STATUS==="reserved-unannounced")return {type:"booking",start:x.start?.dateTime||x.start?.date,end:x.end?.dateTime||x.end?.date,status:"booked"};
  if(f.STATUS!=="published" || !["exhibition","exhibition-opening"].includes(f.TYPE))return null;
  return {type:f.TYPE,start:x.start?.dateTime||x.start?.date,end:x.end?.dateTime||x.end?.date,
   title_ru:f.TITLE_RU||"",title_en:f.TITLE_EN||"",artist_ru:f.ARTIST_RU||"",artist_en:f.ARTIST_EN||""};
 }).filter(Boolean);
}
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname!=="/api/exhibitions")return new Response("Not found",{status:404});
  try {
   const events=await getEvents(await accessToken(env));
   return json({updated_at:new Date().toISOString(),timezone:"Asia/Tbilisi",events:publicEvents(events)});
  } catch(error){
   console.error("Calendar sync unavailable",String(error));
   return json({error:"calendar_unavailable"},503);
  }
 }
};
