> `Feature-Based Folder Structure`

as apps grow, group files by feature rather than file type.

bad (type-based):
```
src/
  components/
    UserList.jsx
    UserProfile.jsx
    HabitList.jsx
  hooks/
    useUsers.js
    useHabits.js
```

good (feature-based):
```
src/
  features/
    users/
      UserList.jsx
      UserProfile.jsx
      useUsers.js
    habits/
      HabitList.jsx
      useHabits.js
```

- makes finding related files easier
- easier to scale and split into modules

---

> `Reusable Component Libraries`

keep small, reusable UI components separate from feature logic.

```
src/
  components/
    ui/
      Button.jsx
      Card.jsx
      Input.jsx
      Modal.jsx
```

- these components should not fetch data or know about app state
- they only accept props and emit events

---

> `Environment Variables (.env)`

store API URLs and secrets outside your code so they can change per environment (dev, staging, prod).

file: `.env`
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

accessing variables in Vite:
```js
const apiUrl = import.meta.env.VITE_API_BASE_URL;

fetch(`${apiUrl}/habits`);
```

- in Vite, variables must start with `VITE_` to be exposed to the browser
- never commit `.env` files with real production secrets to git (add to `.gitignore`)
