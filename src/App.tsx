import "./App.css";
import { useAuthContext } from "./contexts/AuthContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

export default function App() {
	const authCtx = useAuthContext();

	if (!authCtx.isLoggedIn) {
		return <LoginView />;
	} else {
		return <HomeView />;
	}
}
