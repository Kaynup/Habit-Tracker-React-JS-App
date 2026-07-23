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
