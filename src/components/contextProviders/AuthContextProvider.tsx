import { useEffect, useState } from "react";
import { AuthContext, IAuthContext } from "../../contexts/AuthContext";

type Props = {
	children: React.ReactNode;
};

export default function AuthContextProvider({ children }: Props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState<string | null>(null);

	const login = (username: string) => {
		setUsername(username);
	};

	const logout = () => {
		setUsername(null);
	};

	useEffect(() => {
		if (username !== null) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [username]);

	const contextValue: IAuthContext = {
		isLoggedIn,
		username,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}
