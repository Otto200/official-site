// --- 🔐 AUTHENTICATION INTEGRITY ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    // Re-initialize Lucide dynamic vector node instances on layout load
    lucide.createIcons();

    const sessionState = sessionStorage.getItem("ecosystem_session_state");
    const activeUser = sessionStorage.getItem("ecosystem_active_user");
    const traderNameElement = document.querySelector(".username-display");

    // Standard Route Wall Lock Verification
    if (sessionState !== "authorized" || !activeUser) {
        window.location.replace("login.html");
        return;
    }

    if (traderNameElement) {
        traderNameElement.textContent = activeUser;
    }
});

// --- 🚪 SECURE EXIT HANDLER ---
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.replace("login.html");
    });
}

// --- 🎛️ SIDEBAR OVERLAY INTERACTION CONTROLLERS ---
const sidebar = document.getElementById('sideResourcesMenu');
const sidebarToggle = document.getElementById('sidebarToggle');

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        // Handle vector icon toggles contextually if active matching class exists
        sidebarToggle.classList.toggle('active');
    });
}

// Accordion Functional State Layer Processor
function toggleSubNav(triggerElement) {
    const parent = triggerElement.parentElement;
    parent.classList.toggle('active');
}

// --- 🕹️ ACTIVE INTERFACE NAVIGATION CORE STATE SWITCHES ---
function handleDockPress(btnRef, viewId) {
    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    btnRef.classList.add('active');
    loadContent('dock-' + viewId);
}

function toggleMainDisplay(panelId) {
    // Clear top-tier header tab navigation active states
    document.querySelectorAll('.nav-tab').forEach(t => {
        if(!t.id.includes('sidebarToggle')) t.classList.remove('active');
    });
    
    // Auto highlight source trigger item if invoked from a direct clickable element reference
    if(event && event.currentTarget && event.currentTarget.classList.contains('nav-tab')) {
        event.currentTarget.classList.add('active');
    }
    
    loadContent(panelId);
}

// --- 📦 CORE CENTRAL DATABASE MATRIX REGISTRY ---
const CENTRAL_DATA_REGISTRY = {
    "core-concepts": {
        icon: "terminal",
        title: "Ecosystem Core Concepts",
        body: "Master the foundational algorithmic framework of our proprietary institutional model. Tracking internal structures, mitigation vectors, and real-time liquidity clearings allows zero lag edge analysis."
    },
    "indicators": {
        icon: "layers",
        title: "Trading Systems & Toolkits",
        body: "Deploy custom liquidity range indicators, multi-session imbalance scripts, and historical institutional volume blocks directly from your system panel overlay grid parameters."
    },
    "structure-masterclass": {
        icon: "book-open",
        title: "Orderflow Dynamics Course",
        body: "Unlock raw delivery mechanics detailing the core pipeline processing institutional liquidity loops without using standard trailing indicators."
    },
    "liquidity-cycles": {
        icon: "database",
        title: "Liquidity Clearing Frameworks",
        body: "Review structured breakdown documentation mapping high-probability stop run targets and sweep mitigations across major currency pairs."
    },
    "engine-v4": {
        icon: "cpu",
        title: "Liquidity Engine v4.1 Technical Logs",
        body: "Examine developer patch logs, execution parameters, optimization algorithms, and live webhook dispatch rules mapped directly to execution networks."
    },
    "volume-profiles": {
        icon: "bar-chart-2",
        title: "Volume Matrix Configurations",
        body: "Analyze specific point-of-control (POC) cluster behaviors during active London and New York structural sessions."
    },
    "dock-strategy": {
        icon: "activity",
        title: "Active Strategy Matrix View",
        body: "Streaming configuration modules tracking active risk allocation levels, active order trail nodes, and live automated engine operations."
    },
    "dock-market-bias": {
        icon: "globe",
        title: "Macro Market Directional Profiles",
        body: "Consolidated automated institutional bias matrix calculating cross-asset correlations, historical daily targets, and current premium vs discount valuation levels."
    },
    "dock-risk-calc": {
        icon: "calculator",
        title: "Dynamic Allocation & Risk Terminal",
        body: "Input current model data inputs to balance exposure lots based on exact account metrics, drawdown limiters, and precision mathematical scaling arrays."
    }
};

// --- 🖥️ CENTRAL CANVAS VIEWPORT SECURE LAYOUT INJECTOR ---
function loadContent(nodeId) {
    const canvas = document.getElementById('workspace-dynamic-canvas');
    if (!canvas) return;

    // Grab configuration mapping object or fallback smoothly
    const data = CENTRAL_DATA_REGISTRY[nodeId] || {
        icon: "layout",
        title: `Module Active: ${nodeId.toUpperCase().replace(/-/g, ' ')}`,
        body: "Data matrix pipeline established safely. Content visualization engine initialization completed successfully."
    };

    // Inject layout securely using template parameters with clean dynamic Lucide nodes
    canvas.innerHTML = `
        <div class="content-card">
            <h2><i data-lucide="${data.icon}"></i> ${data.title}</h2>
            <hr>
            <p>${data.body}</p>
        </div>
    `;

    // Re-initialize dynamic vector graphics processing engines on injected markup instances
    lucide.createIcons();
}
