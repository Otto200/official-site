// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    // Fire up Lucide Vector Graphics Render Engine
    lucide.createIcons();

    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".username-display");

    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }

    if (traderNameElement) {
        traderNameElement.textContent = activeUser;
    }
});

// --- 🚪 SECURE SYSTEM LOGOUT CONTROLLER ---
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.replace("login.html");
});

// Listen for hash variations natively to sync Lucide nodes across template re-renders
window.addEventListener('hashchange', () => {
    lucide.createIcons();
});
