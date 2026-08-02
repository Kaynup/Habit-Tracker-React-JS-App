> `Testing React Components`

React Testing Library (RTL) tests components by how the user interacts with them, not by their internal implementation (like state).

- Jest: the test runner and assertion library (`expect(true).toBe(true)`)
- RTL: renders components in memory to simulate user behavior

> `Testing a List`

```jsx
// HabitList.jsx
export function HabitList({ habits }) {
    if (habits.length === 0) return <p>No habits yet.</p>;
    return (
        <ul>
            {habits.map(h => <li key={h.id}>{h.name}</li>)}
        </ul>
    );
}
```

```jsx
// HabitList.test.jsx
import { render, screen } from "@testing-library/react";
import { HabitList } from "./HabitList";

test("renders empty state", () => {
    render(<HabitList habits={[]} />);
    expect(screen.getByText("No habits yet.")).toBeInTheDocument();
});

test("renders a list of habits", () => {
    const habits = [{ id: 1, name: "Read" }, { id: 2, name: "Run" }];
    render(<HabitList habits={habits} />);
    
    expect(screen.getByText("Read")).toBeInTheDocument();
    expect(screen.getByText("Run")).toBeInTheDocument();
});
```

---

> `Testing a Form with User Events`

simulate clicks and typing.

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HabitForm } from "./HabitForm";

test("submits the form", async () => {
    const mockSubmit = jest.fn();
    render(<HabitForm onSubmit={mockSubmit} />);

    const input = screen.getByPlaceholderText("Enter habit");
    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "Drink water");
    await userEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledWith("Drink water");
});
```

- `userEvent.type` simulates real keyboard events
- `jest.fn()` creates a mock function to check if it was called

---

> `Testing an API-connected Component`

mock the `fetch` API so tests do not hit a real network.

```jsx
import { render, screen } from "@testing-library/react";
import { UserProfile } from "./UserProfile";

// Mock the global fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: "Punyak" }),
    })
);

test("fetches and displays user data", async () => {
    render(<UserProfile id={1} />);
    
    // wait for the async data to render
    const nameText = await screen.findByText("Punyak");
    expect(nameText).toBeInTheDocument();
});
```

- `findByText` is asynchronous and waits for the element to appear
- `getByText` is synchronous and fails immediately if not found
