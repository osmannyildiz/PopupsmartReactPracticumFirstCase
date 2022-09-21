import { useEffect } from "react";
import "./App.css";
import { useAuthContext } from "./contexts/AuthContext";
import { useUiContext } from "./contexts/UiContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

export default function App() {
	const authCtx = useAuthContext();
	const uiCtx = useUiContext();

	useEffect(() => {
		uiCtx.trySavedTheme();
	}, []);

	return (
		<div className="app">
			{authCtx.isLoggedIn ? <HomeView /> : <LoginView />}
		</div>
	);
}
