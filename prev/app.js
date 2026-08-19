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
});

// --- 🚪 SECURE SYSTEM LOGOUT CONTROLLER ---
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.replace("login.html");
});

// Refresh dynamic vector iconography layers across navigation hash routing events
window.addEventListener('hashchange', () => {
    lucide.createIcons();
    
    // Automatically smooth close the drawer layout side menu upon panel options navigation
    const sidebarElement = document.getElementById('sideResourcesMenu');
    if (sidebarElement && window.location.hash !== '#sideResourcesMenu') {
        sidebarElement.classList.remove('open');
    }
});
