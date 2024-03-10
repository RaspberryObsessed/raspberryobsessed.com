var loadingBarContainer = document.createElement("div");
loadingBarContainer.id = "loading-bar-container";

var loadingBar = document.createElement("div");
loadingBar.id = "loading-bar";
loadingBarContainer.appendChild(loadingBar);

document.body.appendChild(loadingBarContainer);

var styles = document.createElement("link");
styles.rel = "stylesheet";
styles.href = "/resources/loading-bar/styles.css";
document.head.appendChild(styles);

loadingBar.style.width = "0%";

document.onreadystatechange = function () {
    function hideLoadingBar() {
        loadingBarContainer.style.opacity = 0;
    }

    if (document.readyState === "complete") {
        setTimeout(hideLoadingBar, 200);
    } else {
        var progress = (document.readyState === "loading") ? 0 : 100;
        loadingBar.style.width = progress + "%";
    }
};
