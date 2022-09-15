import MainLayout from "../components/layouts/MainLayout";
import { useAuthContext } from "../contexts/AuthContext";

export default function LoginView() {
	const authContext = useAuthContext();

	return (
		<MainLayout>
			<h1>Login View</h1>
			<button type="button" onClick={() => authContext.login("asdf")}>
				login
			</button>
		</MainLayout>
	);
}
