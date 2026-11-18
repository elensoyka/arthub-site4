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


## Release attempt / GitHub merge — 16 November 2026
- The user directly requested publication of the redesigned site with teacher profiles and teaching-language labels.
- PR #7, `feature/programme-nov-2026` → `design/blue-lime-editorial`, successfully merged. Merge SHA: `4df86cc298b467c159f629a29d88d34a31c9e8b7`.
- The `main` branch remains untouched. Files for the timetable and all five teacher pages have been fetched and verified from the merged target branch.
- JavaScript source passes syntax parsing, the 13 group records include explicit teacher arrays and language fields, and the Telegram CTA is present. No linked or rendered browser preview was obtainable.
- GitHub status API reported no CI statuses for the merge commit.
- Cloudflare Workers actual deployment and public HTTP visibility **NOT VERIFIED** (known addresses `https://arthub-site4.workers.dev/` and `https://arthubtbilisi.com/` could not be fetched by available clients). Do not mark publication as complete until checking Cloudflare Workers & Pages → arthub-site4 → Deployments and verifying public pages.
- Master prompt v1.5 prepared (v1.4 plus release and instructor addendum).


## 16 Nov 2026 — Approved compact preview / full-page details (supersedes earlier card design)
**Verbatim intent preserved from latest owner message, after a failed voice-message submission:**
- All preview cards (weekly classes and events) must be visually brief, bold and immediately scannable: heading, **date or weekdays on its own line**, **time on another line**, short language label, and only the **base pass/subscription price** when there is one. Never display individual/drop-in prices in the preview. One-off events have no subscription price in the preview; their full ticket price remains in details.
- **Подробнее** must open a **full dedicated class/event page** with complete existing programme description, teacher link, language, schedule, age, all payment options and **Записаться** button that opens official ArtHub Telegram. No tiny inline accordion and no direct Telegram registration button in preview.
- RU / EN teaching for **calligraphy, papier-mâché, theatre puppetry and clay animation** (explicit owner decision; no "by request" caveat). Ksenia Lipskaya stop-motion remains RU as previously confirmed; other groups remain "to confirm".
- **Both morning and evening theatre puppetry taught by Elena Rybina.** Overrides older "morning teacher TBD" notes.
- Blue cards indicate enrolling courses, lime cards indicate one-off events, pale-green denotes regular classes. Explain the scheme on the weekly schedule.
- Preserve approved site design, course descriptions, schedule, teachers and prices. Photos postponed.
**Implementation in feature/compact-programme-cards:** programme/programme.js renders compact cards and exports verified local class data; programme/detail.html and detail.js display full standalone detail pages; short cards link to full pages, registration CTA only appears on those pages; events/index.html and home event previews similarly link to detail pages; courses/theatre-puppet.html and courses/calligraphy.html reflect confirmed language and teacher. RU/EN preserved. Old event feed's E003/E004/E005 ignored to avoid replacing owner-approved previews with stale data.
**Not yet deployed:** wait for validation of merge and live publishing. main untouched.


## Merge / publication status for compact cards — 16 Nov 2026
PR #8 (feature/compact-programme-cards → design/blue-lime-editorial) merged successfully. Merge SHA: `74cb3772c51379426cdf009cf9c1be559b2755d5`. Main unchanged. The approved message and full preview/detail routing rules are retained above. New master PDF is v1.6. Public URLs `arthub-site4.elensoyka.workers.dev/programme/index.html` and `arthubtbilisi.com/programme/index.html` were **not accessible to the verification browser**. Cloudflare deployment therefore **not confirmed** and must not be represented as successful. JavaScript syntax and reference checks were completed; real on-device layout still unverified.


## 16 November 2026 — Schedule clarity, age coding, merged after-school card (approved)
Supersedes previous after-school child/teen split and prior colour/status design:
- Preserve original site blue/lime palette. **Pale lime**: children and teens after-school; **pale blue**: 14+ and adult courses/regular classes; **bright lime**: one-off events. Do NOT use blue background as a synonym for "enrolling". Use a compact **✳ Идёт набор / Enrolling** label independently of colour. Legend shown above calendar.
- Recruitment panel visible across selected weeks, including weeks BEFORE a lab begins; links to full detail pages and shows announced start dates (stop motion Nov 23, clay Dec 1, model making Dec 3). Scheduled class meetings still begin only on their correct start date.
- Merge four prior Art-prodlënka cards into ONE **Арт-продлёнка** card: Mon/Wed/Fri, 10:00–11:30, 11:30–13:00 (for afternoon school shift); 16:00–17:30 and 17:30–19:00 (for morning school shift). Age **Дети и подростки / Children and teens**. Language **RU / EN**. Status **Можно присоединиться / Join anytime**. Teachers Maria Kondratyeva and Elena Rybina. Retain prices 35 GEL drop-in, 120/4, 220/8; show only 220/8 in preview. Content **cardboard, moving toys, wool, fabric and papier-mâché**; explicitly remove drawing from after-school description.
- Regular classes show **Можно присоединиться** instead of "Идёт набор"; courses with formed-intake show "Идёт набор" independent of colour. All other group-age labels standardized **Взрослые и подростки 14+ / Adults and teens 14+**.
- Mending/embroidery language **RU**. Model-making language **RU / EN**. All previous RU/EN settings for calligraphy, papier-mâché, puppetry, clay and after-school retained. Stop-motion remains RU.
- Course preview and full detail page show each weekday with its precise time **on separate stacked rows** (no ambiguous time-range choices). For merged after-school, one card displays four groups, with day collection and exact times. In the weekly calendar the four after-school slots still appear at their corresponding hours but point to the same one detailed card.
- Heading formerly "О занятии" changed to **Описание** to avoid resemblance to "0 занятий"; details show days/times as individual rows and regular-group status "Можно присоединиться".
- The work is in `feature/schedule-clarity-nov-2026`; current `main` branch remains untouched. No photographs changed, no pricing amounts revised. Cloudflare publication must be separately verified. Master prompt next version v1.7.

## Merge status — 16 November 2026, schedule clarity
PR #9 merged successfully into `design/blue-lime-editorial` at `74a323cad5dcf88476950fd39a0ed5b412b57d9b`. `main` was not changed. Website programme code and decision log are saved. Public Cloudflare site was NOT verified (both known programme URLs inaccessible to checking browser). Browser visual/mobile QA not yet done; do not claim live publication. Master prompt v1.7 is the full prior prompt v1.6 plus this approved revision.

## 16 November 2026 — Rollback of most recent revision v1.7
The site owner rejected the latest age-colour and schedule clarity redesign and explicitly requested restoring the preceding version. Fully restored `programme/programme.js`, `programme/index.html`, `programme/detail.js` and `programme/detail.html` to the exact contents of pre-PR #9 commit `0a1e1cf472b2c981909316b4c2b8b5499ae6137c`. The earlier programme and full-page details from PR #8 remain intact. PR #9 historical merge remains on GitHub but its four functional changes have been reversed by follow-up commits. Version v1.7 must NOT be treated as the current approved design; the authoritative content for the programme UI is the pre-v1.7 version (v1.6). This is a code rollback; Cloudflare public deployment still requires separate verification. Main branch unchanged. No other site sections altered.


## 16 Nov 2026 — Landing navigation, exhibitions, clarity (new approved design direction)
User dictated revisions in conversation; direct current instruction supersedes prior outdated website text and the superseded v1.7 age-colour experiment. **Do not restore v1.7 UI redesign.**

### Exhibition booking, privacy
- 11–18 December 2026 exhibition week is BOOKED, not available.
- Existing Google Calendar `Выставки | ArtHub` event `fah1nofm6cboof3phi9iv306js` edited: private internal description confirms booking by **Катя Райтман**, title unknown. Calendar event is private; no duplicate created.
- Website `exhibitions-calendar.js` explicitly labels `2026-12-11` booked; public UI displays only `Занято / Booked` and must NEVER contain Katya's name. Explanatory RU/EN text adjusted on main page.
- Other week statuses unchanged (notably Dec 18–25 available; late Dec/early Jan tentative per previous instructions).

### Landing UX
- Existing blue/lime editorial site preserved; main descriptive headline now `Творческий и культурный центр ArtHub Tbilisi / Creative & Cultural Centre`.
- Clear service heading hierarchy: `Мастерские ArtHub` with prior slogan as small eyebrow; `Коворкинг для художников` with prior "idea has workspace" phrase as eyebrow; `Корпоративные программы`; `Цех бутафории` (working label after owner explicitly said she liked this variant).
- Opportunity map uses functional names, no metaphor-based navigation (coworking, team programmes, custom props/sets, exhibitions, courses, workspaces). Corporate offer categories: wool/textile, team model making, puppet making.
- Top nav distinguishes in-page anchors from teacher-directory external navigation; all internal destinations checked. Homepage timetable embedded at `#programme`, with auto height updates; clicking schedule, programme and event previews opens a large inline dialog with the existing full RU/EN detail page, no page navigation. Standalone programme URL retained as fallback and opens its own native dialog.
- Uniform button radius (999px), blue fill, white bold text in shared CSS and landing, including previously green coworking strip action.
- Event preview: small `Лекция · RU` label for animation history; animation-set workshop `RU`; Pitch Night `RU / EN`; Big Fish `EN · русские субтитры` (interpreting dictated "русские цифры" as "русские субтитры"; verify with organizer if needed).
- Public events catalogue and programme event-data match. Existing photos and prices unchanged; main branch unchanged.

### Quality / remaining
- Source syntax passed for `programme/programme.js`, `programme/detail.js`, `exhibitions-calendar.js`, and inline scripts on homepage and programme page. Internal nav #links all resolve to existing IDs. Booking artist name absent from public homepage code.
- Browser screenshots, responsive device testing, Cloudflare publication: NOT VERIFIED and must not be claimed.
- Complete master prompt updated to v1.8; supersedes stale contrary requirements in v1.7. A decision remains whether to retain permanent heading `Цех бутафории`; owner used several voice-recognition variants, and this was her clearest affirmative preference.

### Next decisions and work for corporate section
- Confirm final naming and precise scope (production, purchasing, sourcing, setup and installation); differentiate props and event decoration.
- Confirm fixed or custom packages, durations, prices, group limits, materials, off-site delivery.
- Add actual case-study photos once approved, route enquiries to ArtHub Telegram and define intake questions.

## Publication request, 16 November 2026 — PR #10 merged, Cloudflare status unknown
Owner explicitly requested publication. Draft PR #10 was marked ready and merged into `design/blue-lime-editorial` at commit `3fb4e60d929aa9f144155b5554018fddbaf06310`. Verified index.html, exhibition calendar and embedded timetable exist in the target branch. `main` unchanged. No `.github/workflows/deploy.yml`, `wrangler.toml`, `wrangler.json`, or `package.json` was available at known repository paths, and the merge commit reported no GitHub CI statuses. Direct public requests to arthubtbilisi.com and arthub-site4.elensoyka.workers.dev failed from verification clients; an indexed copy of arthubtbilisi.com showed **previous content** but was crawled before the merge. No Cloudflare management connector is available. **Do not claim deployment succeeded**: site code published to working GitHub branch; live Cloudflare publishing and QA remain unverified. Next: open Cloudflare Workers & Pages, confirm project source is this branch, deploy latest commit if necessary, check live RU/EN desktop/mobile before declaring done.


## 18 November 2026 — Ulyana biography, workshop and full website content audit
**Owner request:** publish a structured biography for Ulyana Lashchenko, present studio and exhibition hall separately, use three uploaded real workshop photos, critically simplify site headings/navigation and align UI tokens.
**Staging:** `feature/ulyana-studio-content-20261118`; **not merged**, **not deployed**, `main` unchanged. Keep last approved live website intact pending approval and browser QA.
- `teachers/ulyana-lashchenko.html` fully rewritten RU/EN: education; theatre works including Winnie-the-Pooh museum, `На дне` with BAAT, ДеньД; 4.5 years Tsar-Maket; plaster restoration at St Petersburg Conservatory; artist/illustrator, leatherwork and linocut. No invented credentials or portrait.
- `teachers/index.html` updated Ulyana summary.
- `index.html` added `#venue` and `Мастерская и выставочный зал` overview with distinct uses and calls to action, and re-routed intro CTA to venue. `Работать над своим проектом` duplicated the coworking offer; changed first entry to `Аренда мастерской` and linked it to venue. `Что происходит в ArtHub?` now `Ближайшие события`. Team/course subheading adjusted for clarity.
- `styles.css` added responsive venue cards, photo strip, harmonized button (blue fill/white text/radius 999px), card radius 22px, accessible keyboard focus.
- User's three photos (`1000028969.png`, `1000028971.png`, `1000028974.png`) optimized to three 1200×1600 WebP files in `arthub_workshop_webp_3photos.zip`. **Binary files not yet uploaded to GitHub**. The gallery currently has explicit WebP paths and existing-image fallbacks; users will continue seeing fallback photos until upload. Do not call new photos published.
- Audit file: `WEBSITE_UX_AUDIT_AND_PHOTO_REGISTER_2026-11-18.md`. Master prompt v1.9 PDF appended to v1.8, retains prior instructions and adds overrides. Photo inventory and next steps there.
- **QA completed:** all home internal anchors exist, no duplicate IDs, new inline JavaScript and image-fallback handlers parse; teacher-page JavaScript parses; Ulyana RU/EN copies present and key project names accurate.
- **QA missing:** real desktop/mobile browser screenshots, verified remote deployment/Cloudflare, upload of optimized WebPs and actual image load checks. Cloudflare URLs were not accessible to verification fetch. Publication should not be claimed.
