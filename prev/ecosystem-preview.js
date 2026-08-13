// --- 🔐 MASTER ECOSYSTEM CONTROL ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. AUTHENTICATION INTEGRITY ENGINE
    // ==========================================
    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const usernameDisplay = document.querySelector(".username-display");

    // Block page generation instantly if authorization signatures fail
    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return; 
    }

    if (usernameDisplay) {
        usernameDisplay.textContent = activeUser;
    }

    // ==========================================
    // 2. 🚪 SECURE LOG OUT ENGINE
    // ==========================================
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.clear(); 
            window.location.replace("login.html");
        });
    }

    // ==========================================
    // 3. 🎛️ SIDEBAR DRAWER OVERLAY CONTROLLERS
    // ==========================================
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideResourcesMenu = document.getElementById('sideResourcesMenu');

    if (sidebarToggle && sideResourcesMenu) {
        // Toggle mobile open layout states safely
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sideResourcesMenu.classList.toggle('open');
        });

        // Close drawer immediately when clicking outside structural components
        document.addEventListener('click', (e) => {
            if (!sideResourcesMenu.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sideResourcesMenu.classList.remove('open');
            }
        });
    }

    // Accordion expansion engines inside left layout navigation paths
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = trigger.parentElement;
            if (parent) {
                // Toggles accordion items cleanly matching CSS max-height transitions
                parent.classList.toggle('active');
            }
        });
    });
});
