import "./DarkToggle.css";
const DarkToggle = (props) => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };
  const Checkbox = (
    <label className="toggle-theme" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        // NEW
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      />
      <div className="slider round"></div>
    </label>
  );

  const Checkbox2 = (
    <label className="toggle-theme" htmlFor="checkbox2">
      <input
        type="checkbox"
        id="checkbox2"
        // NEW
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      />
      <div className="slider round"></div>
    </label>
  );
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      {props.place === "header" && Checkbox}
      {props.place === "side-nav" && Checkbox2}
      <span>🌒</span>
    </div>
  );
};

export default DarkToggle;
