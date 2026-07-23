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
