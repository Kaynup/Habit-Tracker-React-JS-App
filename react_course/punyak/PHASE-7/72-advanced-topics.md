> `Code Splitting and Lazy Loading`

loads parts of your app only when they are needed, reducing the initial bundle size.

```jsx
import { Suspense, lazy } from "react";

// The component file is only downloaded when this is rendered
const HeavyChart = lazy(() => import("./HeavyChart"));

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading chart...</p>}>
                <HeavyChart />
            </Suspense>
        </div>
    );
}
```

- `React.lazy` imports the component dynamically
- `<Suspense>` shows a fallback UI (like a spinner) while the code is downloading

---

> `Error Boundaries`

catches JavaScript errors in child components, logs them, and displays a fallback UI instead of crashing the whole app.

*(Note: Error Boundaries currently require class components in React, or you can use a library like `react-error-boundary`)*

```jsx
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BuggyComponent />
        </ErrorBoundary>
    );
}
```

---

> `Accessibility (a11y) Basics`

ensure your app is usable by everyone, including people using screen readers.

bad:
```jsx
<div onClick={submit} className="button-style">Submit</div>
```

good:
```jsx
<button onClick={submit} aria-label="Submit Form">Submit</button>
```

- use semantic HTML tags (`<button>`, `<nav>`, `<main>`, `<header>`)
- associate labels with inputs using `htmlFor`
- use `aria-` attributes only when native HTML is not enough
