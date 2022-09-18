import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import {
	darkThemeIconProps,
	lightThemeIconProps,
	logoutIconProps,
} from "../../utils/iconProps";
import "./Header.css";

export default function Header() {
	const authCtx = useAuthContext();
	const [themeBtnIconProps, setThemeBtnIconProps] =
		useState(lightThemeIconProps);

	useEffect(() => {
		setThemeBtnIconProps(darkThemeIconProps);
	});

	return (
		<header className="header">
			<div className="header__content container">
				<div className="header__brand">
					{import.meta.env.FRONTEND_APP_BRAND}
				</div>
				<div className="header__right-side">
					{authCtx.isLoggedIn ? (
						<>
							<span className="header__account">Hello, {authCtx.username}</span>
							<button
								type="button"
								className="header__btn btn btn--white"
								title="Switch theme"
							>
								<Icon size="1.25rem" {...themeBtnIconProps} />
							</button>
							<button
								type="button"
								className="header__btn btn btn--white"
								title="Logout"
								onClick={() => authCtx.logout()}
							>
								<Icon size="1.25rem" {...logoutIconProps} />
							</button>
						</>
					) : (
						<span>Organize your life.</span>
					)}
				</div>
			</div>
		</header>
	);
}
