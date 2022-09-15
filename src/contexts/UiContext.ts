import UiTheme from "../models/enums/UiTheme";
import buildContext from "../utils/buildContext";

export interface IUiContext {
	theme: UiTheme;
	setTheme: (theme: UiTheme) => void;
}

export const [UiContext, useUiContext] = buildContext<IUiContext>();
