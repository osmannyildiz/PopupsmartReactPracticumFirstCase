import { useEffect, useState } from "react";
import buildContext from "../utils/buildContext";

interface IAuthContext {
	isLoggedIn: boolean;
	username: string | null;
	login: (username: string) => void;
	logout: () => void;
}

export const [AuthContext, useAuthContext] = buildContext<IAuthContext>();

export function buildAuthContextValue(): IAuthContext {
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

	return {
		isLoggedIn,
		username,
		login,
		logout,
	};
}
