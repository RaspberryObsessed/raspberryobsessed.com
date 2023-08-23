document.addEventListener("DOMContentLoaded", function () {
    const desktop = document.getElementById("desktop");
    const appNames = ["App 1", "App 2", "App 3", "App 4", "App 5", "App 6", "App 7", "App 8", "App 9", "App 10"];

    for (let i = 0; i < appNames.length; i++) {
        const icon = document.createElement("div");
        icon.className = "desktop-icon";
        icon.innerHTML = `<div class="app-icon"></div><span>${appNames[i]}</span>`;
        desktop.appendChild(icon);
    }
});
