# React + JavaScript Learning Project
# Habit Quest – A Mobile-First Habit Tracker

> **Goal:** Learn **JavaScript and React together** by building a real application from scratch.
>
> Instead of studying JavaScript and React separately, every new React concept will be introduced alongside the JavaScript fundamentals it depends on.

---
# Table of Contents

1. Project Vision
2. Learning Philosophy
3. Project Overview
4. Mobile-First UI
5. Application Screens
6. Data Model
7. Component Architecture
8. Folder Structure
9. JavaScript + React Learning Roadmap
10. React Learning Phases
11. JavaScript Concepts
12. Feature Roadmap
13. Gamification
14. Development Workflow
15. Milestones
16. Final Goals

---
# 1. Project Vision

The Habit Tracker is intentionally simple at first, but it grows with our knowledge.

Every feature we add teaches:
- JavaScript fundamentals
- React concepts
- Clean project architecture
- Component thinking
- Problem solving

By the end of the project we will understand **how React works instead of merely memorizing APIs**.

---
# 2. Learning Philosophy

For every feature we build we will follow the same pattern:

1. Learn the JavaScript concept.
2. Practice it with plain JavaScript.
3. Implement the same idea in React.
4. Refactor into reusable components and hooks.

This keeps JavaScript as the foundation and React as the framework built on top.

---
# 3. Project Overview

A mobile-first Habit Tracker where users can:

- Create habits
- Edit habits
- Delete habits
- Complete habits daily
- Track streaks
- View statistics
- Organize habits into categories
- Switch between light and dark themes
- Save progress locally
- Earn XP and achievements

---
# 4. Mobile-First Layout

## Bottom Navigation

```text
+-------------------------+
| Dashboard               |
| Habits                  |
| Statistics              |
| Settings                |
+-------------------------+
```

Alternative

```text
🏠   📈   ➕   ⚙️
```

---
# 5. Application Screens

## Dashboard

```text
Good Morning!

Today's Progress

██████░░░░ 60%

Habits

✓ Drink Water
✓ Read 20 mins
□ Workout
□ Journal
□ Sleep Early

+ Add Habit
```

### React Concepts

- JSX
- Components
- Props
- Lists
- Conditional rendering
- Derived progress

---

## Add Habit

```text
Habit Name

[____________]

Category

▼ Health

Goal

Every Day

Color

🟢 🔵 🟠 🟣

[ Save ]
```

### Learn

- Forms
- Controlled inputs
- useState
- Validation

---

## Statistics

```text
Overall Completion

82%

Current Streak

12 Days

Longest Streak

25 Days

Weekly Progress

Mon ████
Tue ██████
Wed ███
Thu ███████
```

### Learn

- Derived state
- Array methods
- Data visualization

---

## Settings

```text
Dark Mode

ON/OFF

Notifications

ON/OFF

Reset Data

Language

Version
```

### Learn

- Context API
- Global settings
- Theme switching

---
# 6. Data Model

## Initial Model

```js
[
  {
    id: 1,
    title: "Drink Water",
    completedToday: true
  }
]
```

## Expanded Model

```js
{
  id: 1,
  title: "Drink Water",
  category: "Health",
  color: "#4CAF50",
  createdAt: "...",
  streak: 8,
  completedDates: [
    "2026-07-20",
    "2026-07-21",
    "2026-07-22"
  ]
}
```

The data model grows naturally as new features are added.

---
# 7. Component Architecture

## Initial

```text
<App>
 ├── Navbar
 ├── Dashboard
 │   ├── ProgressCard
 │   └── HabitList
 │       ├── HabitCard
 │       ├── HabitCard
 │       └── HabitCard
```

## Advanced

```text
<App>
 ├── ThemeProvider
 │   ├── HabitProvider
 │   │   ├── Router
 │   │   │   ├── Dashboard
 │   │   │   ├── Statistics
 │   │   │   └── Settings
```

---
# 8. Suggested Folder Structure

```text
src/
├── assets/
├── components/
│   ├── Button.jsx
│   ├── HabitCard.jsx
│   ├── HabitList.jsx
│   ├── Navbar.jsx
│   └── ProgressCard.jsx
├── context/
│   ├── HabitContext.jsx
│   └── ThemeContext.jsx
├── hooks/
│   ├── useHabits.js
│   ├── useLocalStorage.js
│   └── useStatistics.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Settings.jsx
│   └── Statistics.jsx
├── utils/
│   ├── date.js
│   └── streak.js
└── App.jsx
```

---
# 9. JavaScript + React Learning Roadmap

| Phase | JavaScript | React |
|------|------------|-------|
|1|Variables, functions, template literals|JSX|
|2|Objects & arrays|Components & Props|
|3|map, filter, find|Rendering lists|
|4|Functions & events|onClick, onChange|
|5|Spread & destructuring|Updating state|
|6|Arrow functions|Functional components|
|7|Modules|Project organization|
|8|Closures|Hooks|
|9|Async/Await|useEffect|
|10|Higher-order functions|Custom hooks|

---
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
# 11. JavaScript Concepts

## Variables & Loops

```js
const habits = ["Drink Water","Read","Workout"];

for (const habit of habits) {
  console.log(habit);
}
```

---

## Functions

```js
function greet(name){
  return `Hello ${name}`;
}
```

React component:

```jsx
function Greeting(){
  return <h1>Hello</h1>;
}
```

---

## Objects

```js
const habit = {
  name:"Workout",
  streak:5,
  completed:false
};
```

---

## map()

```js
habits.map(h => h.toUpperCase());
```

React:

```jsx
habits.map(habit => <HabitCard name={habit} />)
```

---

## State

JavaScript

```js
let count = 0;
count++;
```

React

```jsx
const [count,setCount]=useState(0);
setCount(count+1);
```

---

## filter()

```js
const completed = habits.filter(h=>h.completed);
```

---

## find()

```js
const workout = habits.find(h=>h.name==="Workout");
```

---

## Spread Operator

```js
const updated={
  ...habit,
  completed:true
};
```

---

## Destructuring

```js
const {name,streak}=habit;
```

---

## Async/Await

```js
async function load(){
  const response = await fetch(url);
  const data = await response.json();
}
```

React:

```jsx
useEffect(()=>{
  load();
},[]);
```

---
# 12. Feature Roadmap

| Level | Features | Concepts |
|--------|----------|----------|
|Beginner|Static UI|JSX|
|Beginner|Components|Props|
|Beginner|Add/Delete Habits|useState|
|Beginner|Forms|Controlled Inputs|
|Intermediate|Persistence|useEffect|
|Intermediate|Statistics|Array methods|
|Intermediate|Dark Mode|Context|
|Intermediate|Routing|React Router|
|Advanced|Custom Hooks|Hook composition|
|Advanced|Reducer|useReducer|
|Advanced|Performance|useMemo, useCallback|

---
# 13. Gamification (Habit Quest)

Instead of only completing habits, users earn rewards.

Ideas:

- XP for every completed habit
- Daily streak bonus
- Weekly streak bonus
- Levels
- Achievement badges
- Progress bar
- Avatar leveling
- Titles

Examples

- Beginner
- Consistent
- Habit Master
- Discipline Legend

---
# 14. Development Workflow

Every feature follows this cycle:

1. Understand the problem.
2. Learn the JavaScript concept.
3. Write plain JavaScript examples.
4. Convert the idea into React.
5. Refactor into components.
6. Improve readability.
7. Commit changes to Git.

---
# 15. Project Milestones

## Milestone 1

JavaScript Basics

- Variables
- Functions
- Arrays
- Objects
- Loops

---

## Milestone 2

React Basics

- JSX
- Components
- Props

---

## Milestone 3

Interactive UI

- Events
- Forms
- useState

---

## Milestone 4

Data Handling

- map()
- filter()
- find()
- sort()

---

## Milestone 5

Persistence

- useEffect
- localStorage

---

## Milestone 6

Architecture

- Context API
- Custom Hooks
- React Router

---
# 16. Final Goals

By the end of this project we should be comfortable with:

### JavaScript

- Variables
- Functions
- Objects
- Arrays
- Loops
- map()
- filter()
- find()
- reduce()
- Spread operator
- Destructuring
- Async/Await
- Modules
- Closures

### React

- JSX
- Components
- Props
- State
- Events
- Forms
- Conditional Rendering
- Lists
- useEffect
- Context API
- React Router
- Custom Hooks
- useReducer
- useMemo
- useCallback
- useRef

---
# Success Criteria

If this project is completed from scratch without blindly copying tutorials, we will have:

- A production-style React project
- Strong JavaScript fundamentals
- Experience structuring a real application
- Practical understanding of modern React
- A portfolio-ready project that can continue to grow over time.
# 19. No Backend

## Storage: localStorage

```text
React App
      │
      ▼
localStorage
```

### Learn

- JSON serialization (JSON.stringify, JSON.parse)
- Persistence with useEffect
- Browser storage
- CRUD operations
- State synchronization

### Example

```js
const [habits, setHabits] = useState([]);

useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);
```
