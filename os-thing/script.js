document.addEventListener("DOMContentLoaded", function () {
    const desktop = document.getElementById("desktop");

    // Example: Create desktop icons
    for (let i = 1; i <= 10; i++) {
        const icon = document.createElement("div");
        icon.className = "desktop-icon";
        icon.innerHTML = `<span>App ${i}</span>`;
        desktop.appendChild(icon);
    }

    // Update the clock every second
    function updateClock() {
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            const now = new Date();
            let hours = now.getHours();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
});
