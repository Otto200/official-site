/**
 * PRIVATE CORE INTERACTIVE DASHBOARD SYSTEM CONTROLLER
 * Manages personalized profile badges and termination events
 */
document.addEventListener("DOMContentLoaded", () => {
    const userBadge = document.getElementById("active-user-badge");
    const logoutBtn = document.getElementById("logout-btn");

    // Dynamic Interface Rendering: Injects user name from session token storage 
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    if (activeUser && userBadge) {
        userBadge.textContent = activeUser;
    }

    // Safe session destruction and redirection path
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // Completely wipe active login session states out of memory cache
            sessionStorage.removeItem("ecosystem_session_state");
            sessionStorage.removeItem("ecosystem_active_user");
            
            // Redirect clean target straight back to login barrier page
            window.location.replace("login.html");
        });
    }
});
