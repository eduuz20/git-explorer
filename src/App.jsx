import GlobalStyles from "../styles/GlobalStyles";
import { Dashboard } from "./pages/Deshboard";
import { ThemeProvider } from "styled-components";
import dark from "../styles/theme/dark";
export function App() {
  return(
    
    <ThemeProvider theme={dark}>
      <GlobalStyles />
       <Dashboard />
    </ThemeProvider>

    

  )
}
