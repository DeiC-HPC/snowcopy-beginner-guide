(function () {
    const STORAGE_KEY = "platform";

    function currentPlatform() {
        return localStorage.getItem(STORAGE_KEY) || "windows";
    }

    function applyPlatform() {
        const platform = currentPlatform();

        document.querySelectorAll("[data-platform]").forEach(el => {
            el.hidden = el.dataset.platform !== platform;
        });

        const selector = document.getElementById("platform-selector");

        if (selector) {
            selector.value = platform;
        }
    }

    function createSelector() {
        const rightButtons = document.querySelector(".right-buttons");

        if (!rightButtons) {
            console.log("No .right-buttons found");
            return;
        }

        const select = document.createElement("select");
        select.id = "platform-selector";
        select.setAttribute("aria-label", "Platform");

        select.innerHTML = `
            <option value="linux">Linux/macOS</option>
            <option value="windows">Windows</option>
        `;

        select.addEventListener("change", () => {
            localStorage.setItem(STORAGE_KEY, select.value);
            applyPlatform();
        });

        rightButtons.prepend(select);
    }

    document.addEventListener("DOMContentLoaded", () => {
        createSelector();
        applyPlatform();
    });
})();