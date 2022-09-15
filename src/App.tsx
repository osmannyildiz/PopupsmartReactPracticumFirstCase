import GlobalContextsProvider from "./components/GlobalContextsProvider";
import View from "./View";

export default function App() {
	return (
		<div className="App">
			<GlobalContextsProvider>
				<View />
			</GlobalContextsProvider>
		</div>
	);
}
