import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("prefers-color-scheme: dark").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span className="sun" style={{ color: darkMode ? "grey" : "yellow" }}>
            ☀
          </span>
          <label className="switch" for="checkbox">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              type="checkbox"
              id="checkbox"
            />
            <div className="slider round" />
          </label>
          <span
            className="moon"
            style={{ color: darkMode ? "#fff" : "#d1ccc0" }}
          >
            ☪
          </span>
        </div>
      </nav>
      <main className="content">
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>Toggle the switch to change the theme.</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
