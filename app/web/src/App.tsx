import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { Home } from "./pages/home"
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}

