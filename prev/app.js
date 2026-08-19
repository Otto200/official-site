// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    // Fire up Lucide Vector Graphics Render Engine
    lucide.createIcons();

    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".username-display");

    // operational firewall route wall logic check
    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }

    if (traderNameElement) {
        traderNameElement.textContent = activeUser;
    }

    // Force inject system fallback default card on startup sequence
    loadContent('bottom-strategy');
});

// --- 🚪 SECURE SYSTEM LOGOUT CONTROLLER ---
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.replace("login.html");
});

// --- 🎛️ SIDE RESOURCES OVERLAY MATRIX ENGINE ---
const sideMenuDrawer = document.getElementById('sideResourcesMenu');
const dashboardToggleBtn = document.getElementById('dashboardToggleBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

function openOverlayDrawer() {
    sideMenuDrawer?.classList.add('open');
    dashboardToggleBtn?.classList.add('active');
}

function closeOverlayDrawer() {
    sideMenuDrawer?.classList.remove('open');
    // Do not alter active class state if the window event currentTarget states match dashboard parameters
    if (!window.event?.currentTarget?.id?.includes('dashboardToggleBtn')) {
        dashboardToggleBtn?.classList.remove('active');
    }
}

// Attach event listeners for manual interactions
dashboardToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sideMenuDrawer?.classList.contains('open')) {
        closeOverlayDrawer();
    } else {
        openOverlayDrawer();
    }
});
closeDrawerBtn?.addEventListener('click', closeOverlayDrawer);

// Close slider menu safely if touch interaction lands anywhere outside the sidebar dimensions
document.addEventListener('click', (e) => {
    if (!sideMenuDrawer) return;
    const clickInsideMenu = sideMenuDrawer.contains(e.target);
    const clickOnToggleBtn = dashboardToggleBtn?.contains(e.target);
    
    if (!clickInsideMenu && !clickOnToggleBtn && sideMenuDrawer.classList.contains('open')) {
        closeOverlayDrawer();
    }
});

// Accordion Collapsible Structural Controller
function toggleSubNav(triggerElement) {
    const parent = triggerElement.parentElement;
    parent.classList.toggle('active');
}

// --- 🕹️ CENTRAL ROUTING PIPELINE CONTROLLERS ---
function handleDockPress(btnRef, viewId) {
    // Clear dynamic states across bottom buttons layout matrix
    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    btnRef.classList.add('active');
    
    // Wipe active tabs from top navigation rows to lock UI synchronization
    document.querySelectorAll('.tier-two-tab').forEach(t => t.classList.remove('active'));
    
    closeOverlayDrawer();
    loadContent(viewId);
}

function toggleMainDisplay(panelId) {
    // Clear active parameters from both tiers to maintain navigation status syncs
    document.querySelectorAll('.tier-two-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
    
    closeOverlayDrawer();
    loadContent(panelId);
}

// --- 📦 CORE CENTRAL ASYNCHRONOUS DATABASE LAYER ---
const FX_SYSTEM_DATABASE = {
    // --- 🎮 TIER 2 HEADER NAVIGATION TOP MODULE LABELS ---
    "top-sessions": {
        icon: "clock",
        category: "Market Execution Engine",
        title: "Trading Session Frameworks",
        status: "Active Tracking",
        payload: "Streaming live time-block algorithms. London open liquidity injection cycles and New York structural displacement parameters are currently logging in high precision."
    },
    "top-checklist": {
        icon: "check-square",
        category: "System Confluence Matrix",
        title: "Operational Trade Validation Check",
        status: "Sync Ready",
        payload: "System protocols require structural confirmations before lot allocation: 1. Higher Timeframe Liquidity Clear, 2. Lower Timeframe Displacement, 3. Optimal Premium/Discount Trade Entry Alignment."
    },
    "top-tools": {
        icon: "wrench",
        category: "Developer Integrations Engine",
        title: "Terminal API System Configurations",
        status: "Secure Link",
        payload: "Access raw webhook terminal diagnostic logs, webhook routing overrides, charting margin scale calculations, and system response latency tracking metrics layers."
    },

    // --- 🗂️ SIDE RESOURCE LINK DRAWER MATRIX TARGET TEMPLATES ---
    "side-nav1-sub1": { icon: "book-open", category: "Core Education", title: "Institutional Orderflow Dynamics", status: "Verified", payload: "Advanced structural training data block loaded. Review inner mechanics of institutional liquidity footprints without standard lagging indicators." },
    "side-nav1-sub2": { icon: "book-open", category: "Core Education", title: "Liquidity Clearing Frameworks", status: "Verified", payload: "Structural map metrics defining high-probability sweep objectives, stop run targeting metrics, and institutional mitigation models." },
    "side-nav1-sub3": { icon: "book-open", category: "Core Education", title: "Premium vs Discount Valuations", status: "Verified", payload: "Mathematical evaluation framework analyzing accurate discount loading thresholds against premium expansion vectors." },
    
    "side-nav2-sub1": { icon: "activity", category: "Core Education", title: "Mitigation Block Vectors", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav2-sub2": { icon: "activity", category: "Core Education", title: "Fair Value Faps", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav2-sub3": { icon: "activity", category: "Core Education", title: "Order Blocks", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav3-sub1": { icon: "bar-chart-3", category: "Volume Profiling", title: "Session POC Maps", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav3-sub2": { icon: "bar-chart-3", category: "Value Area Highs", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav3-sub3": { icon: "bar-chart-3", category: "Volume Clusters", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav4-sub1": { icon: "cpu", category: "Proprietary Automation", title: "Liquidity Engine v4.1", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav4-sub2": { icon: "cpu", category: "Proprietary Automation", title: "Execution API Logs", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav4-sub3": { icon: "cpu", category: "Proprietary Automation", title: "Webhook Routings", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav5-sub1": { icon: "graduation-cap", category: "Trader Education", title: "Video Modules", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav5-sub2": { icon: "graduation-cap", category: "Trader Education", title: "Execution Blueprint", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav5-sub3": { icon: "graduation-cap", category: "Trader Education", title: "Case Studies Catalog", status: "Verified", payload: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 3 content card successfully loaded." },

    // --- ⚓ BOTTOM FOOTER APP NAVIGATION TERMINAL LABELS ---
    "bottom-strategy": {
        icon: "shield-alert",
        category: "Risk Shield Protocol",
        title: "Active Risk Allocation Parameters",
        status: "Operational Lock",
        payload: "Automated engine tracking live risk coefficients parameters. Emergency breaker nodes are linked directly across all active currency exposure accounts."
    },
    "bottom-analysis": {
        icon: "pie-chart",
        category: "Macro Intelligence Stream",
        title: "Cross-Asset Market Structure Bias",
        status: "Automated Feed",
        payload: "Automated data-stream calculations evaluate technical index strength vectors, premium price delivery cycles, and volume accumulation blocks dynamically."
    },
    "bottom-risk": {
        icon: "calculator",
        category: "Mathematical Allocation System",
