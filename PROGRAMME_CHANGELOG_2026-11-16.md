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


## 16 November 2026 — Poster-based schedule reconciliation (supersedes provisional timings above)
Source: Three user-uploaded posters covering **Monday/Tuesday**, **Wednesday/Thursday**, **Friday/Saturday**. These are the most recent direct source. Updated `programme/programme.js`, `programme/index.html`, `courses/theatre-puppet.html`, `index.html` in **feature/programme-nov-2026**, not deployed.

- **Monday, Wednesday, Friday**: morning after-school groups **10:00–11:30 and 11:30–13:00**; mending/embroidery **13:00–16:00**; afternoon after-school groups **16:00–17:30 and 17:30–19:00**. (Prior provisional Tue/Thu 10:30–12:00 morning schedule is obsolete.) Monday stop-motion animation **19:00–22:00**, from **Nov 23**; Friday evening theatre puppetry **19:00–22:00** (poster notes **two places available**).
- **Tuesday and Thursday**: theatre puppetry morning **10:00–13:00** (prior Wed/Fri morning listing obsolete), calligraphy **13:00–15:00**, papier-mâché **15:00–17:00**. Tuesday clay animation **17:00–19:00**, evening theatre puppetry **19:00–22:00**; Thursday clay animation **17:00–20:00** and model-making **20:00–22:00**.
- **Saturday**: calligraphy **11:00–14:00**, stop-motion puppet animation **14:00–17:00**, model-making **17:00–19:00**.
- Day/time assignments match uploaded posters. Existing one-off November calligraphy series (14, 21, 28 Nov) is separate from Tue/Thu recurring calligraphy; weekday price not yet agreed, marked "Уточняется". Group prices not printed on posters retain previously published prices, pending validation (notably morning after-school prices).
- Previously agreed course starts remain: animation puppet **23 Nov**, clay **1 Dec**, model-making **3 Dec**. Poster does not give start dates, so these remain user-direct decisions.
- Design, photos, exhibition calendar, main branch and live deployment untouched. No real browser/mobile preview or Cloudflare publishing verified.
- Earlier changelog statements indicating morning Tue/Thu and theatre morning Wed/Fri are explicitly **superseded** by this section.


## 16 November 2026 — Teacher profiles, teaching languages and requested release

Approved by direct owner request:
- Teacher directory `teachers/index.html` and 5 bilingual profile pages:
  - `teachers/elena-rybina.html` — Елена Рыбина / Elena Rybina
  - `teachers/ulyana-lashchenko.html` — Ульяна Лащенко / Ulyana Lashchenko
  - `teachers/maria-kondratyeva.html` — Мария Кондратьева / Maria Kondratyeva
  - `teachers/anna-mchedlishvili.html` — Анна Мчедлишвили / Anna Mchedlishvili
  - `teachers/ksenia-lipskaya.html` — Ксения Липская / Ksenia Lipskaya (surname is Липская with **п**).
- Every group card on `programme/index.html` now includes teacher name(s), linked to their profile, and teaching language. Direct course pages also show these two fields.
- Approved mapping: model making → Ульяна Лащенко; animation puppet → Ксения Липская; calligraphy and papier-mâché → Мария Кондратьева; after-school → Мария Кондратьева + Елена Рыбина; visible mending → Анна Мчедлишвили; evening theatre puppetry and clay animation → Елена Рыбина.
- **Morning theatre puppetry** instructor was not specified and is shown as “Уточняется” rather than inventing a teacher.
- **Russian teaching language confirmed only for Ksenia's stop-motion programme** by linked Instagram copy. Other group teaching languages are currently “Уточняется” until owner confirms. Teaching language is not the same as website interface (RU/EN).
- Profiles intentionally contain restrained role-based summaries and placeholders for a future approved portrait, biography and portfolio; do not fabricate awards or credentials.
- Site link to teacher directory added to the homepage and weekly timetable; course detail pages have teacher links. Google Calendar, prices, photos and `main` unchanged.
- Requested by owner: publish site. GitHub branch ready for PR to `design/blue-lime-editorial`; Cloudflare publishing must be separately verified because no Cloudflare deployment tool is connected.
