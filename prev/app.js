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

// --- 📦 CORE DATABASE REGISTRY MATRIX (5 Nav / 3 Sub-nav Template Matrix Attached) ---
const CENTRAL_DATA_REGISTRY = {
    // Tier Two Headers Context Mapping Modules
    "top-sessions": {
        icon: "clock",
        title: "Trading Session Frameworks",
        body: "Real-time deployment tracker monitor logging London liquidity injections, New York volume sweep operations, and Asian consolidation pricing bounds."
    },
    "top-checklist": {
        icon: "check-square",
        title: "Algorithmic Confirmation Checklist",
        body: "Verify systematic confirmation guidelines: 1. Higher Timeframe Bias Sync, 2. Structural Liquidity Sweep, 3. Market Structure Shift via Displacement confirmation vectors."
    },
    "top-tools": {
        icon: "wrench",
        title: "System Developer Toolkits Overlay",
        body: "Access backend configuration rules, webhook dispatch networks, precision charting margin matrices, and terminal latency debug settings layers."
    },

    // Side Menu Slider Sub-Navigation Node Templates
    "side-nav1-sub1": { icon: "book-open", title: "Orderflow Dynamics Analysis", body: "Template Workspace content block initialization path: Side Menu Nav Item 1 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav1-sub2": { icon: "book-open", title: "Liquidity Cycles Module", body: "Template Workspace content block initialization path: Side Menu Nav Item 1 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav1-sub3": { icon: "book-open", title: "Premium vs Discount Matrices", body: "Template Workspace content block initialization path: Side Menu Nav Item 1 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav2-sub1": { icon: "activity", title: "Mitigation Block Vectors", body: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav2-sub2": { icon: "activity", title: "Fair Value Gap Imperfections", body: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav2-sub3": { icon: "activity", title: "Institutional Order Blocks", body: "Template Workspace content block initialization path: Side Menu Nav Item 2 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav3-sub1": { icon: "bar-chart-3", title: "Session Point Of Control Maps", body: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav3-sub2": { icon: "bar-chart-3", title: "Value Area High Extremes", body: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav3-sub3": { icon: "bar-chart-3", title: "Volume Distribution Clusters", body: "Template Workspace content block initialization path: Side Menu Nav Item 3 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav4-sub1": { icon: "cpu", title: "Liquidity Engine v4.1 Integration", body: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav4-sub2": { icon: "cpu", title: "Execution API Diagnostic Logs", body: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav4-sub3": { icon: "cpu", title: "Webhook Dispatch Rule Protocols", body: "Template Workspace content block initialization path: Side Menu Nav Item 4 - Sub Navigation Item 3 content card successfully loaded." },
    
    "side-nav5-sub1": { icon: "graduation-cap", title: "Video Tutorial Framework Modules", body: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 1 content card successfully loaded." },
    "side-nav5-sub2": { icon: "graduation-cap", title: "Execution Blueprint Guides", body: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 2 content card successfully loaded." },
    "side-nav5-sub3": { icon: "graduation-cap", title: "Case Studies Historical Catalog", body: "Template Workspace content block initialization path: Side Menu Nav Item 5 - Sub Navigation Item 3 content card successfully loaded." },

    // Permanent Bottom Anchored Dock Action View Modules
    "bottom-strategy": {
        icon: "shield-alert",
        title: "Active Strategy Deployment Matrix",
        body: "Streaming system analytics logs mapping active parameter limits, active risk weights allocations, and live automated safety breaker nodes across your FX environment infrastructure."
    },
    "bottom-analysis": {
        icon: "pie-chart",
        title: "Macro Technical Market Analysis",
        body: "Automated bias calculator evaluation engine streaming daily premium pricing zones, technical currency index strength trends, and institutional order distribution maps."
    },
    "bottom-risk": {
        icon: "calculator",
        title: "Precision Risk Allocation Control Terminal",
        body: "System risk calculations dashboard interface instance. Process automated lot sizing equations instantly against operational drawdown thresholds."
    },
    "bottom-execution": {
        icon: "zap",
        title: "Low Latency Orders Execution Portal",
        body: "Direct pipeline access point connecting straight into institutional transaction networks. Order triggers configured for single-tap execution processing loops."
    },
    "bottom-review": {
        icon: "file-text",
        title: "System Performance Journal Review",
        body: "Consolidated trading activity database grid summary tracking statistical performance results, win-rate variables parameters, and overall profit-curve growth records."
    }
};

// --- 🖥️ CENTRAL VIEWPORT INJECTOR ---
function loadContent(nodeId) {
    const canvas = document.getElementById('workspace-dynamic-canvas');
    if (!canvas) return;

    const data = CENTRAL_DATA_REGISTRY[nodeId] || {
        icon: "layout",
        title: "Terminal Instance Running",
        body: "Secure runtime visualization canvas connection active. Workspace initial configuration verified successfully."
    };

    canvas.innerHTML = `
        <div class="content-card">
            <h2><i data-lucide="${data.icon}"></i> ${data.title}</h2>
            <hr>
            <p>${data.body}</p>
        </div>
    `;

    lucide.createIcons();
}
