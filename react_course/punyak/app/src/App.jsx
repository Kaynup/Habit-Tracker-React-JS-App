import { Counter, UserForm } from "./sections/21";
import { Button, SearchBox } from "./sections/22";
import { LiftingState, MessageApp } from "./sections/23";
import { Stopwatch, UserProfile } from "./sections/24";
import { TextInputRef, ExpensiveCalc, ContextDemo } from "./sections/31";
import { WelcomeCard, ToggleDemo } from "./sections/32";
import { ConditionalButton } from "./sections/33";
import { TodosFetcher } from "./sections/34";

export default function App() {
	return (
		<div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
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
				<UserProfile />
            </section>

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