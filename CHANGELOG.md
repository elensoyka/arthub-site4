# CHANGELOG — ArtHub Tbilisi

## 2026-11-13 — ArtHub Alive: афиша и сообщество

- Сохранена резервная GitHub-ветка `backup/pre-alive-2026-11-13`, идентичная `design/blue-lime-editorial` на момент создания.
- PR #3 (`feature/arthub-alive-agenda-v1`) объединён с `design/blue-lime-editorial`, merge commit `ae427252f0164a4b6538be7e3ac81a428a12545b`.
- Добавлена `events/index.html`: RU/EN афиша двух лекций Ксении Липской (16 и 19 ноября 2026, 20:00, 15 ₾) и блок входа в творческое сообщество.
- В `index.html` добавлены две навигационные ссылки (Афиша и Сообщество). Остальные ранее утверждённые материалы не менялись.
- Запись на лекции пока ведёт на официальный Instagram `https://instagram.com/arthub.tbilisi`. Никакие личные данные не сохраняются.
- Документация и решение в `docs/ARTHUB_ALIVE_DECISIONS_v1.md` (перенесено из ветки feature).

**Проверено:** GitHub PR объединён; в diff новой функциональности только `events/index.html`, навигация `index.html` и документация.
**Cloudflare:** прямой доступ к деплою отсутствует; опубликованный сайт не подтверждён. Проверка `https://arthubtbilisi.com/events/` из среды завершилась ошибкой доступа; это не доказывает, что адрес недоступен пользователю.
**Откат:** вернуться к коммиту `4b0280d8114de6a2d26da91c14fcbc4fae03c9e6` или использовать сохранённую резервную ветку (без force push; предпочтительно revert merge).
**Нельзя:** изменять устаревшую ветку main, заменять frontend worker `arthub-site4` календарным API worker `arthub-calendar-test`, терять данные или изображения.
