const preferedMode = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const toggle = document.getElementById("theme-toggle");
let toggleIcon = toggle.firstElementChild;

function updateTheme() {
    var theme;

    if(currentTheme === null) {
        theme = preferedMode.matches ? "dark" : "light";
    } else {
        theme = currentTheme;
    }

    if(theme === "dark") {
        toggleIcon.src = "/assets/icons/sun.svg";
    } else {
        toggleIcon.src = "/assets/icons/moon.svg";
    }

    document.documentElement.setAttribute("data-theme", theme);
}

updateTheme();
preferedMode.addEventListener("change", () => updateTheme());
