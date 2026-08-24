---
name: create-new-template
description: This skill should be used when the user asks to
  "create new template", "new event template", "add next month", "scaffold next month",
  or otherwise wants to scaffold the next monthly Android Evening event file in the dev-evening repo.
version: 0.1.0
---

# Create the next monthly event file

Scaffolds `events/YYYY-MM.md` and adds a link to `README.md`. The next month is inferred — the user does not specify it.

## Steps

1. **Pick next month.** List `events/YYYY-MM.md` files, take the highest, add one month (December → January of next year).

2. **Create `events/YYYY-MM.md`** (two-digit month) with:

```
## <Month> <Year>

--- break ---

```
   - `<Month>` is the full English name (`July`, not `Jul`).

3. **Update `README.md`.** Append `- [<Month> <Year>](./events/YYYY-MM.md)` to the bottom of the matching `#### YYYY`
block (months ascend, years descend). If the year section is new, add a `#### YYYY` block above the previous year's.

4. **Stop.** Do not `git add` or `git commit` — the user commits manually (`Android Evening MM.YYYY`, two-digit month,
e.g. `Android Evening 07.2026`).

Report the new file path and the exact README line added.
