// --- 🔐 MASTER ECOSYSTEM CONTROL ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. AUTHENTICATION INTEGRITY ENGINE
    // ==========================================
    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".trader-name");

    // Hard check: If the token is empty or invalid, block entry and boot to login
    if (sessionState !== "authorized" || !activeUser) {
        window.location.href = "login.html";
        return; // Stop executing completely
    }

    // Success: Inject the authenticated database username into the Top Nav Tier 1 profile
    if (traderNameElement) {
        traderNameElement.textContent = activeUser;
    }


    // ==========================================
    // 2. 🚪 SECURE LOG OUT ENGINE
    // ==========================================
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // Clear session tokens completely
            sessionStorage.removeItem("ecosystem_session_state");
            sessionStorage.removeItem("ecosystem_active_user");
            // Clear all fallback keys
            sessionStorage.clear(); 
            // Return to login gate
            window.location.href = "login.html";
        });
    }


    // ==========================================
    // 3. 🎛️ SIDEBAR OVERLAY INTERACTION CONTROLLERS
    // ==========================================
    const sideMenu = document.getElementById('sideMenu');
    const myDashboardBtn = document.getElementById('myDashboardBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Safe Check: Only attach sidebar events if the elements exist on this specific page
    if (sideMenu && myDashboardBtn && sidebarOverlay) {
        // Toggle Sidebar Open/Closed state when clicking My Dashboard
        myDashboardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sideMenu.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });

        // Close sidebar if user clicks anywhere outside of it
        document.addEventListener('click', (e) => {
            const isClickInsideMenu = sideMenu.contains(e.target);
            const isClickOnToggleBtn = myDashboardBtn.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnToggleBtn && sideMenu.classList.contains('active')) {
                sideMenu.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            }
        });
    }

    // Accordion functionality for dropdown items inside the sidebar
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = trigger.parentElement;
            if (parent) {
                parent.classList.toggle('open');
            }
        });
    });

}); // <-- End of DOMContentLoaded Wrap


// ==========================================
// 4. ⚓ BOTTOM DOCK VIEWPORT ROUTER
// ==========================================
// This function remains OUTSIDE DOMContentLoaded so the HTML 'onclick' attributes can access it globally.
function handleDockPress(buttonElement, targetView) {
    // 1. Remove the 'active' styling class from all navigation buttons in the dock
    const allButtons = document.querySelectorAll('.dock-action-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    // 2. Add the 'active' styling class to the specific button that was clicked
    buttonElement.classList.add('active');

    // 3. Select your core strategy workspace container
    const strategyWorkspace = document.getElementById('strategy-workspace');

    // 4. Evaluate which view was requested by the dock menu click
    if (targetView === 'strategy') {
        // Smoothly reveal the checklist dashboard layout
        if (strategyWorkspace) {
            strategyWorkspace.style.display = 'block';
        }
    } else {
        // Hide the strategy workspace if they click any other button
        if (strategyWorkspace) {
            strategyWorkspace.style.display = 'none';
        }
    }
}
