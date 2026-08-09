  <script>
        // --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
        document.addEventListener("DOMContentLoaded", () => {
            const sessionState = sessionStorage.getItem("ecosystem_session_state");
            const activeUser = sessionStorage.getItem("ecosystem_active_user");
            const traderNameElement = document.querySelector(".trader-name");

            // Hard check: If the token is empty or invalid, block entry and boot to login
            if (sessionState !== "authorized" || !activeUser) {
                window.location.href = "login.html";
                return;
            }

            // Success: Inject the authenticated database username into the Top Nav Tier 1 profile
            if (traderNameElement) {
                traderNameElement.textContent = activeUser;
            }
        });

        // --- 🚪 SECURE LOG OUT ENGINE ---
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

        // --- 🎛️ SIDEBAR OVERLAY INTERACTION CONTROLLERS ---
        const sideMenu = document.getElementById('sideMenu');
        const myDashboardBtn = document.getElementById('myDashboardBtn');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

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

        // Accordion functionality for dropdown items
        document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const parent = trigger.parentElement;
                parent.classList.toggle('open');
            });
        });
    </script>
