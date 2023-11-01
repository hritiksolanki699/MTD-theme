import { useContext, useEffect } from "react";
import "./index.scss";
import "../src/assets/scss/theme.scss";
import Routes from "./routes/routes";
import { ThemeContext } from "./context/themeContext";

function App() {
  const { getThemeClassName, selectedTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (selectedTheme === "light") {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#6c757d";
    } else {
      document.body.style.backgroundColor = "#181924";
      document.body.style.color = "#e3e3e4";
    }
  }, [selectedTheme]);

  return (
    <div className={`${getThemeClassName()}`}>
      <Routes></Routes>
    </div>
  );
}

export default App;
