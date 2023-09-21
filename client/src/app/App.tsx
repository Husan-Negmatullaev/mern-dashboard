import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme/theme.ts";
import { RouterProvider } from "react-router-dom";
import { configRouter } from "@/app/providers/RouterProvider";

const theme = createTheme(themeSettings);

export type AppThemeType = typeof theme;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={configRouter} />
		</ThemeProvider>
	);
}

export default App;
