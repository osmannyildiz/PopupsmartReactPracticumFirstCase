import { AuthContext, buildAuthContextValue } from "../contexts/AuthContext";
import {
	BackendContext,
	buildBackendContextValue,
} from "../contexts/BackendContext";
import { buildUiContextValue, UiContext } from "../contexts/UiContext";
import { Children } from "../utils/propTypes";

interface Props {
	children: Children;
}

export default function GlobalContextsProvider({ children }: Props) {
	const authContextValue = buildAuthContextValue();
	const uiContextValue = buildUiContextValue();
	const backendContextValue = buildBackendContextValue();

	return (
		<AuthContext.Provider value={authContextValue}>
			<UiContext.Provider value={uiContextValue}>
				<BackendContext.Provider value={backendContextValue}>
					{children}
				</BackendContext.Provider>
			</UiContext.Provider>
		</AuthContext.Provider>
	);
}
