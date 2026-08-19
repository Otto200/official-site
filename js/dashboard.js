// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".username-display"); // Matches your GitHub HTML

    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }
    if (traderNameElement) traderNameElement.textContent = activeUser;
});

// --- ⚙️ INTERACTIVE INTERFACE CONTROLLERS ---
// Toggle Collapsible Side Resources Drawer
const sidebar = document.getElementById('sideResourcesMenu');
const sidebarToggle = document.getElementById('sidebarToggle');

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Nested Accordion Structure Controller
function toggleSubNav(triggerElement) {
    const currentItem = triggerElement.parentElement;
    currentItem.classList.toggle('active');
}

// Active State Dock Button Switch Controller
function handleDockPress(btnRef, viewId) {
    document.querySelectorAll('.dock-action-btn').forEach(b => b.classList.remove('active'));
    btnRef.classList.add('active');
    loadContent('dock-' + viewId);
}

// --- 📦 CORE DATABASE DEPLOYMENT PAYLOADS ---
// Easily add, remove, or edit your trading contents right here
const DASHBOARD_CONTENT_REGISTRY = {
    // Top-tier utility panels
    "core-concepts-panel": {
        title: "Ecosystem Core Concepts",
        body: "Master the foundational algorithmic framework of our proprietary environment."
    },
    "indicators-panel": {
        title: "Trading Systems & Tools",
        body: "Access state indicators, volume profiles, and liquidity models below."
    },
    // Sidebar items
    "core-content-1": {
        title: "Market Structure Masterclass",
        body: "Learn raw institutional orderflow dynamics without lagging indicator data."
    },
    "books-content-1": {
        title: "Orderflow Mechanics Catalog",
        body: "Review technical mechanics detailing how liquidity clearing cycles process."
    },
    "indicators-content-1": {
        title: "Liquidity Engine v4.1 Documentation",
        body: "Implementation logs and parameters optimized for major FX pairs."
    },
    // Dock Actions
    "dock-strategy": {
        title: "Active Strategy Matrix",
        body: "Currently deployed strategy maps tracking algorithmic order flow."
    },
    "dock-market": {
        title: "Live Market Analysis",
        body: "Real-time key structural zones and macro price delivery perspectives."
    }
};

// --- 🖥️ SECURE LAYER VIEWPORT INJECTOR ---
function loadContent(nodeId) {
    const canvas = document.getElementById('workspace-dynamic-canvas');
    if (!canvas) return;

    // Fetch dynamic item payload or fallback to generic layout state
    const data = DASHBOARD_CONTENT_REGISTRY[nodeId] || {
        title: `Active Module: ${nodeId.toUpperCase().replace(/-/g, ' ')}`,
        body: "Custom workspace configuration successfully loaded into live runtime view."
    };

    // Inject content dynamically with clean layout wrappers
    canvas.innerHTML = `
        <div class="content-card-active animate-glow clicked-node-state">
            <h2>${data.title}</h2>
            <hr style="border: 1px solid rgba(255,215,0,0.1); margin: 15px 0;">
            <p>${data.body}</p>
        </div>
    `;
}

// Fallback link mapping helper for global structural calls
function toggleMainDisplay(panelId) {
    loadContent(panelId);
}
