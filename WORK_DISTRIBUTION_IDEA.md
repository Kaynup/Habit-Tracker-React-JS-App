Good size for this — six people maps cleanly onto natural feature boundaries in the doc. Two ways to think about it, and honestly you probably want both:

1. Split by feature/screen (who builds what)

Person	Owns	Roadmap sections
1	Dashboard + Habit List + HabitCard (CRUD basics)	§5 Dashboard, §7 Component Architecture
2	Add/Edit Habit form	§5 Add Habit, controlled inputs/validation
3	Statistics screen + data viz	§5 Statistics, array methods (map/filter/find)
4	Settings + Theme (Context API)	§5 Settings, Context
5	Persistence layer (localStorage, custom hooks, reducer)	§19 No Backend, useEffect, useReducer
6	Gamification + Routing	§13 Gamification, React Router

This works well once you're past the fundamentals, because each screen is a fairly self-contained slice — one person can own a component end-to-end (UI → state → styling) without stepping on others' code.

2. The catch: it's a learning project, not just a build

The roadmap is sequential on purpose — JS concepts unlock React concepts in order (§9). If you split work too early, the person on Settings never practices useState/CRUD, and the person on Dashboard never touches Context. A few ways teams handle that:

Fundamentals together, features apart. Do Phases 1–5 (JSX, props, useState, forms, lists) as a group — pair programming or mob programming on the base app. Once everyone's comfortable, split into the 6 feature tracks above for Phases 6–10.
Rotate ownership. Keep the 6 tracks, but rotate people through them every week or two so everyone touches Context, hooks, and the reducer at some point instead of only the two people who "got" those tickets.
Shared data layer, separate UI. Have 1–2 people build the HabitContext/useHabits hook first (since everything else depends on it), then the other 4 build screens against that shared interface in parallel.
