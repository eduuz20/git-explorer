import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "../styles/theme/dark";
export function App() {
  return(
    
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>

    

  )
}
