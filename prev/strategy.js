document.addEventListener("DOMContentLoaded", () => {
    // 1. DOM Elements Selection
    const checklistItems = document.querySelectorAll(".checklist-item");
    const tipBox = document.querySelector(".pro-tip-box");
    const tipBoxTitle = tipBox.querySelector("h5");
    const tipBoxText = tipBox.querySelector("p");

    // 2. Main Execution Evaluation Function
    const evaluateSystemReadiness = () => {
        // Count how many checkboxes are currently uncompleted
        const totalPending = document.querySelectorAll(".checklist-item.state-pending").length;

        if (totalPending === 0) {
            // Update Tip Box styling to a verified success state
            tipBox.style.background = "rgba(56, 139, 60, 0.15)";
            tipBox.style.borderColor = "rgba(56, 139, 60, 0.4)";
            
            // Dynamic success copy matching your discipline principles
            tipBoxTitle.innerHTML = "✅ SYSTEM VALIDATED";
            tipBoxText.innerHTML = "All technical confluence layers have been verified. Risk parameters are locked. Execute the trade systematically on your platform.";
        } else {
            // Reset to default warning/buffer state if items remain unverified
            tipBox.style.background = "rgba(56, 182, 255, 0.05)";
            tipBox.style.borderColor = "rgba(56, 182, 255, 0.2)";
            
            tipBoxTitle.innerHTML = "💡 Core Trading Rule";
            tipBoxText.innerHTML = "If all checklist requirements are not checked, do not execute the position. Discipline rewards consistency over long horizons.";
        }
    };

    // 3. Click Event Handlers Setup
    checklistItems.forEach(item => {
        item.style.cursor = "pointer"; // Enhance UI affordance

        item.addEventListener("click", () => {
            const checkbox = item.querySelector(".custom-checkbox");

            if (item.classList.contains("state-pending")) {
                // Toggle to Complete state
                item.classList.remove("state-pending");
                item.classList.add("state-complete");
                checkbox.innerHTML = "✓";
            } else {
                // Toggle back to Pending state
                item.classList.remove("state-complete");
                item.classList.add("state-pending");
                checkbox.innerHTML = "";
            }

            // Run system evaluation checks immediately post-click
            evaluateSystemReadiness();
        });
    });

    // Run initial execution run check on page mount
    evaluateSystemReadiness();
});
