import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {themeSettings} from "./theme/theme.ts";

const theme = createTheme(themeSettings);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      hi
    </ThemeProvider>
  )
}

export default App
