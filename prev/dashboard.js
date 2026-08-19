// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Vector Icons System
    lucide.createIcons();

    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".username-display");

    // Enforce operational gate validation
    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }
    if (traderNameElement) traderNameElement.textContent = activeUser;

    // Load initial default terminal state canvas payload
    loadContent('dock-market');
});

// --- 🚪 SECURE LOG OUT ENGINE ---
document.querySelector(".logout-btn")?.addEventListener("click", () => {
    sessionStorage.clear(); 
    window.location.replace("login.html");
});

// --- 📱 MOBILE BOTTOM DRAWER CONTROLLERS ---
const sideDrawer = document.getElementById('sideResourcesMenu');
const mobileMenuBtn = document.getElementById('mobileResourcesBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

function openDrawer() { sideDrawer?.classList.add('open'); }
function closeDrawer() { sideDrawer?.classList.remove('open'); }

mobileMenuBtn?.addEventListener('click', openDrawer);
closeDrawerBtn?.addEventListener('click', closeDrawer);

// --- 🗂️ ACCORDION MENU TOGGLE ---
function toggleSubNav(triggerElement) {
    const parent = triggerElement.parentElement;
    parent.classList.toggle('active');
}

// --- 🕹️ BOTTOM DOCK VIEW CONTROLLER ---
function handleDockPress(btnRef, viewId) {
    document.querySelectorAll('.dock-action-btn').forEach(b => b.classList.remove('active'));
    btnRef.classList.add('active');
    loadContent('dock-' + viewId);
}

// --- 📦 CORE DATABASE METRICS DEPLOYMENT PAYLOADS ---
const CENTRAL_DATA_REGISTRY = {
    "dock-market": {
        title: "Live Market Intelligence",
        body: "Real-time structural delivery metrics display engine active. High precision institutional liquidity blocks loaded successfully across active FX currency matrix parameters."
    },
    "dock-strategy": {
        title: "Algorithmic Strategy Matrix",
        body: "Active operational parameters deployed. Systems are monitoring raw multi-tiered liquidity sweeping operations without lagging processing data fields."
    },
    "core-concepts": {
        title: "Market Structure Masterclass",
        body: "Comprehensive structural breakdowns defining retail manipulation patterns vs clean algorithmic flow delivery models inside volatile environments."
    },
    "orderflow": {
        title: "Orderflow Mechanics Catalog",
        body: "Deep dive mechanics training covering interbank clearing schedules, execution latency pools, and optimal spread alignment optimization data."
    },
    "liquidity-engine": {
        title: "Liquidity Engine v4.1 Documentation",
        body: "Implementation matrix logs detailing programmatic tracking algorithms. Optimized targeting formulas for high performance execution processing."
    },
    "indicators": {
        title: "Proprietary Indicators & Volume Profiles",
        body: "Overview files displaying installation instructions for trading ecosystem chart metrics layers across personal trading viewport arrays."
    }
};

// --- 🖥️ VIEWPORT CANVAS CORE INJECTOR ---
function loadContent(nodeId) {
    const canvas = document.getElementById('workspace-dynamic-canvas');
    if (!canvas) return;

    // Retrieve database payload object match
    const data = CENTRAL_DATA_REGISTRY[nodeId] || {
        title: "Module Node Initialized",
        body: "Secure sandboxed interface module running live configurations."
    };

    // Inject matching database card wrapper safely into the viewport layer canvas
    canvas.innerHTML = `
        <div class="content-card-active animate-glow">
            <h2>${data.title}</h2>
            <hr style="border: 0; height: 1px; background: rgba(255,215,0,0.1); margin-bottom: 16px;">
            <p>${data.body}</p>
        </div>
    `;

    // Automatically dismiss the mobile bottom sheet interface layout after navigation selection
    closeDrawerBtn() { closeDrawer(); };
    closeDrawer();
}
