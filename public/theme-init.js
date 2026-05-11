(function () {
    try {
        var k = "itowns-theme";
        var s = localStorage.getItem(k);
        var prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        var isDark =
            s === "dark" ? true : s === "light" ? false : prefersDark;
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
        var meta = document.getElementById("meta-theme-color");
        if (meta) {
            meta.setAttribute(
                "content",
                isDark ? "#0f0f0f" : "#f1f1f1",
            );
        }
    } catch (e) {
        document.documentElement.dataset.theme = "light";
    }
})();
