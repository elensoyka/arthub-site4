# ArtHub OS — Programme redesign · 16 November 2026

## Status
**Staged in feature branch only; NOT merged or deployed.** No photos added. Main and design/blue-lime-editorial unchanged. Await final schedule posters and owner review.

## Implemented
- programme/index.html and programme/programme.js: new responsive RU/EN weekly timetable, 11 navigable weeks starting 16 Nov, clickable sessions, filters (all/regular/enrolling/events), detailed cards and Telegram enrolment links.
- index.html: link to programme, upcoming preview for 19 Nov workshop, 21 Nov Big Fish, 25 Nov Pitch Night.
- events/index.html: 19 Nov event changed from puppet lecture to 2h animation-set workshop, ticket 40 ₾; time 20:00 by latest owner instruction. Big Fish on 21 Nov at 20:30, price pending; Pitch Night shifted 18 -> 25 Nov, 19:00 retained from former post.
- events/live-events.js: keeps stale E004/E005 Google Sheet feed entries from overwriting explicitly updated event cards. The source spreadsheet still needs manual sync.
- course pages for calligraphy, model-making, theatre-puppet, stop-motion linked to new timetable. Evening theatre-puppet group added to schedule. Calligraphy price updated to 50 ₾ one / 120 ₾ three from Instagram.
- programme groups: M/W/F after-school children 16:00–17:30, mixed 17:30–19:00, morning Tue/Thu 10:30–12:00 as provisional; mending M/W/F 13:00–16:00; papier-mâché Tue/Thu 15:00–17:00 provisional; theatre-puppet morning Wed/Fri 10:00–13:00, evening Tue/Fri 19:00–22:00; stop-motion Mon 19:00–22:00 / Sat 14:00–17:00 from 23 Nov; model-making Thu 20:00–22:00 / Sat 17:00–19:00 from 3 Dec; clay animation tentative Tue 17:00–19:00 / Thu 17:00–20:00 from Dec 1; calligraphy on Nov 14/21/28 11:00–14:00.
- All group cards show prices, enrollment label and Telegram CTA. Missing prices labelled "Уточняется". Approved existing course prices retained: model making 340 ₾ /8 (6 people), stop motion 400 ₾ /8 (5 people), theatre puppet 320 ₾ /8, clay animation 240 ₾ /8.

## Source discrepancies / require review
1. Instagram workshop post https://www.instagram.com/p/DfxOf3eCIjv/ lists **19:00**, while owner requested **20:00** for Nov 19. Website uses 20:00; social post & Google Sheet need synchronization.
2. Previous Instagram clay animation post said Thu/Sat 17:00–19:00; owner now requests start Tue Dec 1. Tue/Thu schedule is a provisional adaptation of newest timetable reference, pending newly generated posters.
3. Morning after-school hours and papier-mâché exact prices/ages need confirmation from upcoming posters.
4. Film Big Fish admission price not specified; not invented.
5. Google Sheet public feed E004/E005 may still show old titles/dates; these entries are ignored in the website card updater until corrected at source.
6. Pricing option only, NOT published: at same gross revenue as an 8-person class, 340*8/6 = 453.33 ₾ (suggest rounded 455 ₾/8) and 400*8/5=640 ₾/8. This is a capacity-only scenario; detailed unit costs, hours and affordability should be reviewed before approval.
7. Potential time collisions within Thursday 17:00–20:00 clay animation and other room bookings; validate rooms separately.
8. Old main page references are preserved, no photos inserted or altered.

## Source / confidence
Direct owner requests from 16 Nov; connected @arthub.tbilisi Instagram posts for actual price and evening theatre-puppet sessions; existing source code for historic information. Website structure and CSS preserved. Testing: JS parser syntax OK, four events/anchors present, RU/EN fields present, calendar dates have correct weekdays. Browser/mobile visual rendering and publication NOT yet verified.

## Next actions
1. Review new generated weekly schedule images, reconcile tentative timings/ages and unpublished prices.
2. Inspect site preview and mobile RU/EN.
3. Synchronize public Google Sheets feed events E004/E005.
4. Approve feature branch merge to design/blue-lime-editorial and deploy Cloudflare if access allows. Never alter main without explicit permission.
