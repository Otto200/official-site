/**
 * ECOSYSTEM PRIVATE WORKSPACE MASTER SYSTEM CONTROLLER
 * Handles global structural interactions, layouts, states, and session persistence.
 */
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================================
    // 0. SYSTEM PROFILE & SESSION VALIDATION LOGIC
    // ==========================================================================
    const userBadge = document.getElementById("active-user-badge");
    const logoutBtn = document.getElementById("logout-btn");

    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    if (activeUser && userBadge) {
        userBadge.textContent = activeUser;
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("ecosystem_session_state");
            sessionStorage.removeItem("ecosystem_active_user");
            window.location.replace("login.html");
        });
    }

    // ==========================================================================
    // 1. COLLAPSIBLE SIDEBAR MECHANICAL STATE ENGINE
    // ==========================================================================
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", () => {
            // Evaluates and alternates state attributes cleanly for layout manipulation
            if (sidebar.classList.contains("sidebar-open")) {
                sidebar.classList.remove("sidebar-open");
                sidebar.classList.add("sidebar-collapsed");
            } else {
                sidebar.classList.remove("sidebar-collapsed");
                sidebar.classList.add("sidebar-open");
            }
        });
    }

    // ==========================================================================
    // 2. NAVIGATION TAB VISUAL SELECTION MOCKUP
    // ==========================================================================
    const navLinks = document.querySelectorAll(".nav-link");

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Blocks default jumping paths
                navLinks.forEach(item => item.classList.remove("active"));
                link.classList.add("active");
            });
        });
    }
});
