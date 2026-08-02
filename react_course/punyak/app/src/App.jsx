import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Counter, UserForm } from "./sections/21";
import { Button, SearchBox } from "./sections/22";
import { LiftingState, MessageApp } from "./sections/23";
import { Stopwatch, UserProfile as FetchUserProfile } from "./sections/24";
import { TextInputRef, ExpensiveCalc, ContextDemo } from "./sections/31";
import { WelcomeCard, ToggleDemo } from "./sections/32";
import { ConditionalButton } from "./sections/33";
import { TodosFetcher } from "./sections/34";

import { UserProfile, SearchQuery } from "./sections/41";
import { UiButton, ConfigDemo } from "./sections/42";

import { ReducerCounter, BearCounter, BearControls } from "./sections/51";
import { ReactQueryTodos } from "./sections/52";

import { HabitList, HabitForm } from "./sections/61";
import { MemoDemo } from "./sections/62";

import { BuildInfo } from "./sections/71";
import { ErrorBoundary, BuggyComponent, AccessibleForm } from "./sections/72";

function Phase2() {
    return (
        <div>
            <h1>Phase 2 Sections</h1>
            <section>
                <h2>State Counter</h2>
                <Counter />
                <h2>Mutlistate </h2>
                <UserForm />
            </section>
            <section>
                <h2>Event Handling Button</h2>
                <Button />
                <h2>Search box `onChange`</h2>
                <SearchBox />
            </section>
            <section>
                <h2>Lifting State Up</h2>
                <LiftingState />
                <h2>Component Communication `onSendMessage`</h2>
                <MessageApp />
            </section>
            <section>
                <h2>Side Effect Stopwatch</h2>
                <Stopwatch />
                <h2>Side Effect Data Fetching</h2>
                <FetchUserProfile />
            </section>
        </div>
    );
}

function Phase3() {
    return (
        <div>
            <h1>Phase 3 Sections</h1>
            <section>
                <h2>3.1 More Hooks (useRef, useMemo, useContext)</h2>
                <TextInputRef />
                <ExpensiveCalc />
                <ContextDemo />
            </section>
            <section>
                <h2>3.2 Component Architecture (Composition & Custom Hooks)</h2>
                <WelcomeCard />
                <ToggleDemo />
            </section>
            <section>
                <h2>3.3 Styling Approaches (Conditional Class/Style)</h2>
                <ConditionalButton />
            </section>
            <section>
                <h2>3.4 Working with APIs (useEffect + Fetch with Loading/Error)</h2>
                <TodosFetcher />
            </section>
        </div>
    );
}

function Phase4() {
    return (
        <div>
            <h1>Phase 4 Sections</h1>
            <section>
                <h2>4.1 React Router (Params & Query)</h2>
                <p>Try visiting <Link to="/users/123">/users/123</Link> to see route params!</p>
                <SearchQuery />
            </section>
            <section>
                <h2>4.2 Project Structure & Config</h2>
                <UiButton onClick={() => alert("UI Component clicked!")}>UI Component Button</UiButton>
                <ConfigDemo />
            </section>
        </div>
    );
}

function Phase5() {
    return (
        <div>
            <h1>Phase 5 Sections</h1>
            <section>
                <h2>5.1 Beyond Context (useReducer & Zustand)</h2>
                <ReducerCounter />
                <BearCounter />
                <BearControls />
            </section>
            <section>
                <h2>5.2 Server State (React Query)</h2>
                <ReactQueryTodos />
            </section>
        </div>
    );
}

function Phase6() {
    return (
        <div>
            <h1>Phase 6 Sections</h1>
            <section>
                <h2>6.1 Testing (Mock UI components)</h2>
                <HabitList habits={[{ id: 1, name: "Read" }, { id: 2, name: "Workout" }]} />
                <HabitForm onSubmit={(name) => alert("Habit submitted: " + name)} />
            </section>
            <section>
                <h2>6.2 Code Quality (React.memo)</h2>
                <MemoDemo />
            </section>
        </div>
    );
}

function Phase7() {
    return (
        <div>
            <h1>Phase 7 Sections</h1>
            <section>
                <h2>7.1 Build & Deploy</h2>
                <BuildInfo />
            </section>
            <section>
                <h2>7.2 Advanced Topics</h2>
                <h3>Error Boundaries</h3>
                <ErrorBoundary>
                    <BuggyComponent />
                </ErrorBoundary>
                
                <h3>Accessibility (a11y)</h3>
                <AccessibleForm />
            </section>
        </div>
    );
}

function Layout() {
    return (
        <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
            <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
                <Link to="/">Phase 2</Link>
                <Link to="/phase3">Phase 3</Link>
                <Link to="/phase4">Phase 4</Link>
                <Link to="/phase5">Phase 5</Link>
                <Link to="/phase6">Phase 6</Link>
                <Link to="/phase7">Phase 7</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Phase2 />} />
                <Route path="/phase3" element={<Phase3 />} />
                <Route path="/phase4" element={<Phase4 />} />
                <Route path="/phase5" element={<Phase5 />} />
                <Route path="/phase6" element={<Phase6 />} />
                <Route path="/phase7" element={<Phase7 />} />
                <Route path="/users/:id" element={<UserProfile />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    );
}

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </QueryClientProvider>
    );
}