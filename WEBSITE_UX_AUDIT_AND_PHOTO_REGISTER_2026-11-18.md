# ArtHub Tbilisi — UX/content audit and media register
**18 November 2026 · staging branch** `feature/ulyana-studio-content-20261118`

## Guardrails
- Maintain the existing blue/lime editorial design, full RU/EN pages and site information; do not restart the website.
- No publishing or merge into `design/blue-lime-editorial` until visual review because prior sweeping changes were rejected.
- Do not change `main`, calendar reservations, prices or timetable without explicit consent.
- New workshop images were provided by the owner in conversation; these files are **not yet in GitHub**. The gallery currently retains its working original site photos as a safe fallback. Do not claim the three new photos are live.

## Implemented in the staging branch
1. Fully rewritten `teachers/ulyana-lashchenko.html` (RU/EN): education; theatre & scenography; Winnie-the-Pooh children's theatre museum; Gorky's `The Lower Depths` with BAAT; Den D festival; 4.5 years in a Moscow model-making studio, including Tsar-Maket; 3 years plaster ornament restoration including St Petersburg Conservatory; illustration, leatherwork and linocut. Portfolio link not invented.
2. `teachers/index.html`: Ulyana's entry now reflects model-making, theatre and set design.
3. `index.html`: new prominent **Мастерская и выставочный зал / Studio & Exhibition Hall** section with two distinct functional descriptions and links to the timetable and exhibition area. Existing workshop/gallery photos used as fallback.
4. `index.html`: top nav includes an in-page **Пространство / Space** anchor; hero CTA points to space overview. **Аренда мастерской / Studio Rental** and **Коворкинг для художников / Coworking for Artists** are no longer duplicate service cards. Event heading changed to **Ближайшие события / Upcoming Events**.
5. `styles.css`: responsive two-column venue section, harmonized 22px card corners and pill actions, keyboard focus rings, reduced-motion support. Existing colours preserved.
6. No confirmed bio facts omitted: shorter on-page introductory text and grouped projects retain all eight original owner-supplied experience points.

## Existing content and site hierarchy — recommended reading flow
**Intro (what ArtHub is)** → **What you can do here** → **Upcoming Events** → **Studio and Exhibition Hall** → **Workshops** → **Schedule / Enrolment** → **Gallery / exhibition weeks** → **Coworking** → **Corporate programmes** → **Props workshop** → **Team / Teachers** → **Contacts**.

This is a **recommended longer-term grouping**, not a wholesale reorder: moving every block risks disrupting approved design and anchors. Current staging keeps the established block order, adding a prominent space overview and clarifying navigation.

## Critical issues & follow-up backlog, priority order
- **P0 (publication):** verify deployment source branch and published build; GitHub changes do not guarantee Cloudflare publication. Check 375px mobile / 768px tablet / desktop, RU/EN switching, focus-visible and modal scrolling.
- **P0 (photos):** upload 3 optimized WebP files to `site-photos/`, then replace provisional studio photo with new image #2 and set a 3-frame studio gallery. Do not point the live website at paths that have not been uploaded.
- **P1 (content freshness):** remove/historicize past event cards after dates, without silently changing bookings and prices.
- **P1 (space pages):** distinguish **master studio** (class, project, booking) from **coworking** (individual place) and **gallery** (exhibition/display); add actual space capacity/booking conditions only when confirmed.
- **P1 (navigation):** home has many top-level links; consider grouping into `Занятия / Пространство / События / Услуги / Команда / Контакты` after UX approval. Avoid unclear identical appearance for in-page and external links; keep `↗` for external and `↓` for anchors where useful.
- **P1 (content design):** use a functional H2 and one concise supporting line; do not use poetic copy as the only heading. CTA verbs: `Смотреть расписание`, `Узнать условия`, `Записаться`, `Обсудить заказ`.
- **P2 (design tokens):** consolidate several repeated inline styles and historically accumulated border radii into one shared CSS token source. One-off local styles still exist on older pages; global CSS changes should be tested against them.
- **P2 (teachers):** portrait and artwork portfolio for each teacher; approved biographies; attach relevant courses with clear language and subscription pricing.
- **P2 (image accessibility):** check all `alt` text descriptions, photo copyright/permission and consistent 4:5 or 3:4 crop where practical.

## Uploaded studio images (owner-provided)
Source: three uploaded photographs of workshop space; optimize by retaining authentic people, art objects and interior (no AI reconstruction).
- `1000028969.png` → `site-photos/arthub-workshop-01.webp`: long view from the entrance, table and full room; proposed first frame in workshop gallery.
- `1000028971.png` → `site-photos/arthub-workshop-02.webp`: workshop with two people at a large table; proposed leading photo for studio section.
- `1000028974.png` → `site-photos/arthub-workshop-03.webp`: detail of the studio with hanging artwork and desk; proposed third frame.
Prepared three 1200×1600 WebP assets in ZIP `arthub_workshop_webp_3photos.zip` (available as a conversation attachment, not deployed to repository). Original images preserved.

## Photography still needed — priority
**High**
1. Exterior / recognisable entrance: clean daytime landscape and vertical photo.
2. Workshop: wide, clear panorama without clutter + one active class with participants (with consent).
3. Gallery: wide empty hall, two angles; existing gallery archive may suffice for now.
4. Portrait of Ulyana in studio + 4–6 portfolio images with authorship/captions (models / scenography / restoration).
5. Each current course: hero process photo plus completed participant-made work.

**Medium**
6. Coworking: actual artist using a place at a table or easel; a storage/easel view.
7. Props workshop: 3–5 real commissions showing process and finished result.
8. Corporate activities: group at work and final shared creation, with consent.
9. Other teachers: coordinated portraits, one image per teacher and work examples.
10. Exhibition openings: visitors, art and installation shots; protect people’s privacy.

**For each photo:** author and permission, alt text, credit/caption, orientation, target page, and recommended crop. Do not use unapproved stock or AI invented portfolio photographs.

## GitHub and publication statuses
Feature branch contains work; no merge and no live Cloudflare update verified. `main` untouched. Do not call this published. Next step: inspect staging preview, upload optimized photos, retest before merging.
