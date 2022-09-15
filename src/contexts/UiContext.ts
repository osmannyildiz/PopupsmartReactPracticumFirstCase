import { useState } from "react";
import UiTheme from "../models/enums/UiTheme";
import buildContext from "../utils/buildContext";

interface IUiContext {
	theme: UiTheme;
	setTheme: (theme: UiTheme) => void;
}

export const [UiContext, useUiContext] = buildContext<IUiContext>();

export function buildUiContextValue(): IUiContext {
	const [theme, setTheme] = useState(UiTheme.LIGHT);

	return {
		theme,
		setTheme,
	};
}
