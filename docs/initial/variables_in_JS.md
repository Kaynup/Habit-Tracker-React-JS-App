# Variables in JavaScript

## What is a variable?
A variable stores a value so you can use it later in your code.
Values can include strings, numbers, booleans, arrays, objects, functions, and more.

## Declare variables
```js
const appName = "Habit Tracker";
let totalHabits = 3;
var olderStyle = "avoid unless you have a specific reason";
```

## `const`, `let`, and `var` — the short version
- `const` is block-scoped and cannot be reassigned.
- `let` is block-scoped and can be reassigned.
- `var` is function-scoped, can be redeclared, and is hoisted differently than `let`/`const`.

The rest of this doc unpacks what "differently" actually means, since that's where most bugs come from.

---

## Side-by-side comparison

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassignable | Yes | Yes | No |
| Redeclarable in same scope | Yes | No (SyntaxError) | No (SyntaxError) |
| Hoisted | Yes (initialized to `undefined`) | Yes (but in "temporal dead zone") | Yes (but in "temporal dead zone") |
| Attaches to `window`/global object (in browsers, top-level) | Yes | No | No |
| Accessing before declaration | Returns `undefined` | Throws `ReferenceError` | Throws `ReferenceError` |

---

## `const` example
```js
const appName = "Habit Tracker";
// appName = "Task Tracker"; // TypeError: Assignment to constant variable

const settings = { theme: "dark" };
settings.theme = "light"; // OK: object contents can still change
```

`const` locks the *binding*, not the *value*. If the value is an object or array, its contents remain mutable — see the section below.

## `let` example
```js
let totalHabits = 3;
totalHabits = 4; // OK

if (true) {
  let blockCount = 1;
  console.log(blockCount); // 1
}
// console.log(blockCount); // ReferenceError: blockCount is not defined
```

## `var` example
```js
var olderStyle = "avoid unless you have a specific reason";
olderStyle = "still works"; // OK

if (true) {
  var hidden = true;
}
console.log(hidden); // true — `var` ignores block scope entirely
```

---

## Hoisting: `var` vs. `let`/`const`

All three are technically "hoisted" — JavaScript sets up the variable name before running the code. But they behave very differently once hoisted:

```js
console.log(varName); // undefined (no error)
var varName = "hi";

console.log(letName); // ReferenceError: Cannot access 'letName' before initialization
let letName = "hi";
```

`var` is hoisted *and* initialized to `undefined` immediately, so reading it early just gives `undefined`.

`let` and `const` are hoisted too, but they sit in the **temporal dead zone (TDZ)** — a span of code where the variable exists but can't be touched yet. Accessing it there throws, rather than silently returning `undefined`. This is one of the main reasons `let`/`const` catch bugs that `var` would let slide.

## Redeclaration

```js
var count = 1;
var count = 2; // OK, no error

let total = 1;
let total = 2; // SyntaxError: Identifier 'total' has already been declared
```

This matters more than it looks. Two `<script>` tags that both declare `let total = 1` at the top level will crash the page. The same pattern with `var` just quietly overwrites and keeps running. That's a double-edged sword: forgiving in some legacy setups, but it also means `var` won't warn you about accidental duplicate names, which is exactly the kind of silent bug modern JS tries to prevent.

## Global attachment (browser only)

```js
var globalVar = "I'm on window";
let globalLet = "I'm not";

console.log(window.globalVar); // "I'm on window"
console.log(window.globalLet); // undefined
```

Some older third-party scripts or debugging workflows rely on globals being reachable via `window`. That's a `var`-only behavior.

---

## So does `var` still have real uses?

Mostly no — `let`/`const` are the right default in new code, and this doc still recommends them. But `var` isn't just "the broken old one." It has a few properties that are sometimes *intentionally* useful, mostly in specific legacy or interop situations:

1. **Shared loop variable in closures (old pattern).** Because `var` isn't block-scoped, every iteration of a loop shares the *same* variable — which used to be exploited on purpose when you wanted callbacks to share one counter, rather than each getting its own copy.
   ```js
   for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 0); // 3, 3, 3 — all share one `i`
   }

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 0); // 0, 1, 2 — each gets its own `j`
   }
   ```
2. **Redeclaration tolerance** in code that might be re-run or concatenated in the same scope, where a `let` collision would crash but a `var` collision won't.
3. **Fail-soft access** (`undefined` instead of a thrown error) is occasionally preferred in defensive/legacy code that checks `typeof someVar === "undefined"` before a variable is guaranteed to exist.
4. **Explicit global exposure** via `window`, when some other script or the browser console needs to reach the variable directly.

None of these are strong enough reasons to reach for `var` by default — they're mostly artifacts of code that predates block scoping, or narrow interop needs. But it's more accurate to say **`var` behaves differently on purpose**, not that it's simply worse in every way.

---

## Using `const`, `let`, and `var` together

A realistic pattern in one function, showing why each choice was made:

```js
function summarizeHabits(rawHabits) {
  const habits = rawHabits.filter(h => h.active); // won't be reassigned — const
  let streak = 0;                                  // will change as we loop — let

  for (let i = 0; i < habits.length; i++) {         // loop counter, block-scoped — let
    if (habits[i].completedToday) {
      streak++;
    }
  }

  // var only shown here for contrast — there's no real reason to use it
  // in new code like this; let/const cover every case above.
  var legacyFlag = window.LEGACY_MODE || false;

  return { habits, streak, legacyFlag };
}
```

**Practical rule of thumb:**
- Default to `const`.
- Switch to `let` only when you know the value will be reassigned (loop counters, accumulators, values that get updated conditionally).
- Reach for `var` only when you have a specific reason tied to its function-scoping, redeclaration tolerance, or global-attachment behavior — not as a default.

---

## Variable naming rules
- Start with a letter, `_`, or `$`
- Use camelCase for readability: `dailyGoal`, `habitCount`
- Variable names are case-sensitive: `count` and `Count` are different
- Avoid JavaScript's reserved words (a fixed list — not just the few examples below): `class`, `function`, `const`, `return`, `if`, `else`, `new`, `typeof`, `this`, `import`, `export`, and others

## Change a variable value
```js
let habitCount = 2;
habitCount = habitCount + 1;
console.log(habitCount); // 3
```

## Different value types
```js
const title = "Morning Routine";
const active = true;
const score = 42;
const habits = ["Drink Water", "Read"];
const settings = { theme: "dark", notifications: true };
```

## `const` with objects and arrays
Even when a value is declared with `const`, the contents of an object or array can still change:
```js
const habit = { name: "Run", completed: false };
habit.completed = true;

const habitList = ["Sleep Early"];
habitList.push("Meditate");
```

## Variables in React
In React, plain JavaScript variables are used inside components to calculate values and render UI.
```jsx
function HabitSummary({ habits }) {
  const habitCount = habits.length;
  const message = habitCount === 1 ? "1 habit" : `${habitCount} habits`;

  return <p>{message}</p>;
}
```

---

## Learn
- how to declare variables with `const`, `let`, and `var`
- how hoisting and the temporal dead zone differ between `var` and `let`/`const`
- when `var`'s function scoping, redeclaration tolerance, or global attachment are actually useful
- why `const`/`let` are the right default despite that
- how variables store different data types
- how to use variables together in a real function, and in React components