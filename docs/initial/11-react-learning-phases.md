# 10. React Learning Phases

## Phase 1 — JSX

Build static UI.

Learn:
- JSX syntax
- Expressions
- Components returning JSX

---

## Phase 2 — Components

Break UI into reusable pieces.

Learn:
- Props
- Children
- Composition

---

## Phase 3 — useState

```js
const [habits, setHabits] = useState([]);
```

Features:
- Add
- Delete
- Edit
- Complete

---

## Phase 4 — Forms

- Controlled inputs
- Validation
- Submission

---

## Phase 5 — Lists

```jsx
habits.map(...)
```

Learn:
- Keys
- Mapping
- Filtering

---

## Phase 6 — useEffect

Persist with Local Storage.

Flow:

```text
Load App
   ↓
Read localStorage
   ↓
Render
   ↓
Save Updates
```

---

## Phase 7 — Context API

Share:

- Theme
- User preferences
- Habit data

without prop drilling.

---

## Phase 8 — Custom Hooks

Examples:

```text
useLocalStorage()
useTheme()
useHabits()
useStatistics()
```

---

## Phase 9 — React Router

Routes

```text
/
 /statistics
 /settings
 /about
```

---

## Phase 10 — Advanced Hooks

- useMemo
- useCallback
- useRef
- useReducer

Reducer actions:

```text
ADD_HABIT
DELETE_HABIT
EDIT_HABIT
TOGGLE_COMPLETE
RESET_DATA
```

---
