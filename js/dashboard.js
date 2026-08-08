/**
 * PRIVATE CORE INTERACTIVE DASHBOARD SYSTEM CONTROLLER
 * Manages profile settings, step validations, tab systems, and risk calculators.
 */
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================================
    // 0. AUTHENTICATION USER INTERFACE SETTINGS
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
    // 1. POSITION SIZE CALCULATOR ENGINE
    // ==========================================================================
    const calcBtn = document.getElementById("calc-btn");
    const balanceInput = document.getElementById("calc-balance");
    const riskInput = document.getElementById("calc-risk");
    const entryInput = document.getElementById("calc-entry");
    const stopInput = document.getElementById("calc-stop");
    const calcResult = document.getElementById("calc-result");

    if (calcBtn && calcResult) {
        calcBtn.addEventListener("click", () => {
            const balance = parseFloat(balanceInput.value);
            const riskPercent = parseFloat(riskInput.value);
            const entryPrice = parseFloat(entryInput.value);
            const stopLoss = parseFloat(stopInput.value);

            // Validation Rule: Verify all inputs are active numeric entries
            if (isNaN(balance) || isNaN(riskPercent) || isNaN(entryPrice) || isNaN(stopLoss)) {
                calcResult.textContent = "Invalid Inputs";
                return;
            }

            // Validation Rule: Prevent processing zero/negative values
            if (balance <= 0 || riskPercent <= 0 || entryPrice <= 0 || stopLoss <= 0) {
                calcResult.textContent = "0.00";
                return;
            }

            // Calculation Core Logic: Determine absolute pricing delta parameter 
            const priceDistance = Math.abs(entryPrice - stopLoss);

            // Validation Rule: Avoid divisions by zero if Entry and Stop values are identical
            if (priceDistance === 0) {
                calcResult.textContent = "Invalid Distance";
                return;
            }

            // Equation Matrix: Position Size = (Balance * (Risk / 100)) / Risk Distance
            const totalRiskCapital = balance * (riskPercent / 100);
            const rawPositionSize = totalRiskCapital / priceDistance;

            // Display Output Formatting (Locked clean to 2 decimal units max)
            calcResult.textContent = rawPositionSize.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        });
    }

    // ==========================================================================
    // 2. CHECKLIST GATEKEEPER IMPLEMENTATION
    // ==========================================================================
    const checklistItems = document.querySelectorAll(".checklist-item");
    const proceedBtn = document.getElementById("proceed-btn");

    if (checklistItems.length > 0 && proceedBtn) {
        const evaluateChecklistState = () => {
            // Converts NodeList to array and verifies every item is checked
            const allChecked = Array.from(checklistItems).every(checkbox => checkbox.checked);
            
            // Toggle system parameters natively
            proceedBtn.disabled = !allChecked;
        };

        // Attach changes event hooks to target input selectors
        checklistItems.forEach(checkbox => {
            checkbox.addEventListener("change", evaluateChecklistState);
        });
    }

    // ==========================================================================
    // 3. TAB SWITCHING VISUAL MOCKUP ENGINE
    // ==========================================================================
    const navLinks = document.querySelectorAll(".nav-link");

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Prevents default browser reload jumps
                
                // Remove active classes out of matching array sets
                navLinks.forEach(item => item.classList.remove("active"));
                
                // Append active status to clicked link target
                link.classList.add("active");
            });
        });
    }

    // ==========================================================================
    // 4. BONUS: STRATEGY SELECTOR INTERACTION ENGINE
    // ==========================================================================
    const strategyButtons = document.querySelectorAll(".strategy-btn");
    const strategyTitle = document.getElementById("strategy-display-title");
    const strategyText = document.getElementById("strategy-display-text");

    const strategyData = {
        trend: {
            title: "Trend Continuation Blueprint",
            text: "Identify a strong structural trend line on the higher timeframe. Wait for a pullback to the key value levels before executing positions. Ensure risk parameters map directly to your playbook rules."
        },
        reversion: {
            title: "Mean Reversion Structural Grid",
            text: "Spot extreme overextended pricing bounds colliding with key daily historical support or resistance lines. Target immediate regression movements backwards into central moving averages."
        },
        breakout: {
            title: "Breakout Momentum Engine",
            text: "Track long compression ranges forming narrow consolidation boxes. Enter immediately upon high volume expansions closing distinctly out of boundaries. Adjust stops below median breakout flags."
        }
    };

    if (strategyButtons.length > 0 && strategyTitle && strategyText) {
        strategyButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                strategyButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const selectedStrategy = btn.getAttribute("data-strategy");
                if (strategyData[selectedStrategy]) {
                    strategyTitle.textContent = strategyData[selectedStrategy].title;
                    strategyText.textContent = strategyData[selectedStrategy].text;
                }
            });
        });
    }
});
