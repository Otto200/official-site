// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");

    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }
});

// --- 🚪 SECURE SYSTEM LOGOUT CONTROLLER ---
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.replace("login.html");
});

window.addEventListener('hashchange', () => {
    lucide.createIcons();
    const sidebarElement = document.getElementById('sideResourcesMenu');
    if (sidebarElement && window.location.hash !== '#sideResourcesMenu') {
        sidebarElement.classList.remove('open');
    }
});
