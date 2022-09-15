import { useState } from "react";
import { IUiContext, UiContext } from "../../contexts/UiContext";
import UiTheme from "../../models/enums/UiTheme";

type Props = {
	children: React.ReactNode;
};

export default function UiContextProvider({ children }: Props) {
	const [theme, setTheme] = useState(UiTheme.LIGHT);

	const contextValue: IUiContext = {
		theme,
		setTheme,
	};

	return (
		<UiContext.Provider value={contextValue}>
			{children}
		</UiContext.Provider>
	);
}
