// Menu
burger = document.querySelector(".burger")
nav = document.getElementById("nav")
line1 = document.getElementById("line-1")
line2 = document.getElementById("line-2")
line3 = document.getElementById("line-3")



burger.addEventListener("click", () => {
    nav.classList.toggle("showNav")

    line1.classList.toggle("line-1")
    line2.classList.toggle("line-2")
    line3.classList.toggle("line-3")


})


// Dark Mode
function Mode() {
    const darkMode = document.querySelector(".switcher");

    darkMode.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("theme-dark", "true");
        }
        else {
            localStorage.setItem("theme-dark", "false");
        }
        themeMode();
    });

    function themeMode() {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("dark-theme");
        }
        else {
            document.body.classList.add("dark-theme");
        }
    }
    if (localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }
    if (document.body.classList.contains("dark-theme")) {
        darkMode.checked = true;
    }
}
Mode();