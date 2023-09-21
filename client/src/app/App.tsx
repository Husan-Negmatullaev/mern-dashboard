import { RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { configRouter } from "@/app/providers/RouterProvider";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { themeSettings } from "./theme/theme.ts";

const theme = createTheme(themeSettings);

export type AppThemeType = typeof theme;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StoreProvider>
				<CssBaseline />
				<RouterProvider router={configRouter} />
			</StoreProvider>
		</ThemeProvider>
	);
}

export default App;
