import { useAuthContext } from "./contexts/AuthContext";
import "./View.css";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

export default function View() {
	const authContext = useAuthContext();

	if (!authContext.isLoggedIn) {
		return <LoginView />;
	} else {
		return <HomeView />;
	}
}
