import "./App.css";
import BackendContextProvider from "./components/contextProviders/BackendContextProvider";
import HomeView from "./views/HomeView";

export default function App() {
	return (
		<div className="App">
			<BackendContextProvider>
				<HomeView />
			</BackendContextProvider>
		</div>
	);
}
