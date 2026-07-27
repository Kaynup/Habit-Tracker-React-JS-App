Phase 2: State & Interactivity

* 2.1 State Management Basics
> useState  — reading and updating stateFunctional updates ( setState(prev => ...) )State immutability (why direct mutation breaks things)

* 2.2 Event Handling
> Synthetic events, event handlersForms: controlled components ( value  +  onChange )Form validation basics

* 2.3 Component Communication
> Lifting state upPassing callbacks as props (child → parent communication)Prop drilling — recognizing the pain point (sets up Context later)

* 2.4 Side Effects
> useEffect  — dependency array behavior (no array, empty array, with values)Cleanup functions (avoiding memory leaks)Common use cases: data fetching, subscriptions, timers