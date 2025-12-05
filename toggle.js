const body = document.body;
const ligtbut = document.getElementById("lightmode");
const darkbut = document.getElementById("darkmode");

ligtbut.addEventListener("click", () => setTheme("light"))

darkbut.addEventListener("click", () => setTheme("dark"))

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add("dark");
    }
    else {
        body.classList.remove("dark");
    }
}