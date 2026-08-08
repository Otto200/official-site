/**
 * PRIVATE ACCESS AUTHENTICATION EDGE ENGINE
 * Validates distributed pass phrases locally and establishes session keys.
 */
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const keyInput = document.getElementById("access-key");
    const errorBox = document.getElementById("error-box");

    if (!loginForm) return;

    // MASTER USER CREDENTIAL PAIRS
    // Add, change, or remove usernames and keys here for your traders
    const VALID_USER_KEY_PAIRS = {
        "admin": "PNG_ECOSYSTEM_2026",
        "trader1": "IC_ACCESS_NOW",
        "guest": "VIP_PASS"
    };

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const accessKey = keyInput.value.trim();

        // Validates input against credential index mapping list above
        if (VALID_USER_KEY_PAIRS[username] && VALID_USER_KEY_PAIRS[username] === accessKey) {
            errorBox.style.opacity = "0";
            
            // Set temporary authorization state variables
            sessionStorage.setItem("ecosystem_session_state", "authorized");
            sessionStorage.setItem("ecosystem_active_user", username);
            
            // Send user to your private dashboard workspace file instantly
            window.location.href = "dashboard.html";
        } else {
            // Apply visual error hints on failure
            errorBox.style.opacity = "1";
            usernameInput.style.borderColor = "#FF4A4A";
            keyInput.style.borderColor = "#FF4A4A";
            
            keyInput.value = "";
            keyInput.focus();
        }
    });

    // Clean up input warning border indicators when typing begins again
    [usernameInput, keyInput].forEach(input => {
        input.addEventListener("input", () => {
            input.style.borderColor = "";
            errorBox.style.opacity = "0";
        });
    });
});
