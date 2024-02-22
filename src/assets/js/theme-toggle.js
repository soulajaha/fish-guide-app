const toggleBtn = document.getElementById("theme-toggle");
const toggleBtnIcon = document.getElementById("theme-toggle-icon");

toggleBtn.addEventListener("click", function () {
    var theme = localStorage.getItem("theme");
    
    if (theme === null) {
        theme = preferedMode.matches ? "dark" : "light";
    }

    if (theme === "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }
    
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
        toggleBtnIcon.src = "/assets/icons/sun.svg";
    } else {
        toggleBtnIcon.src = "/assets/icons/moon.svg";
    }
    
    localStorage.setItem("theme", theme);
});
