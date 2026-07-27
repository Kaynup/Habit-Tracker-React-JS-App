import { Counter, UserForm } from "./sections/21";
import { Button, SearchBox } from "./sections/22";
import { LiftingState, MessageApp } from "./sections/23";
import { Stopwatch, UserProfile } from "./sections/24";

export default function App() {
	return (
		<div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
			<h1>Sections</h1>
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
		</div>
	);
}