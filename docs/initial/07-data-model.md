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
