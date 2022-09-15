import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
	const authContext = useAuthContext();

	return (
		<header>
			<h3>Header</h3>
			{authContext.isLoggedIn && <h5>{authContext.username}</h5>}
		</header>
	);
}
