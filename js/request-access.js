document.addEventListener("DOMContentLoaded", () => {
    // ⚙️ SYSTEM CONFIGURATION MATRIX
    const PRIVATE_PHONE = "675XXXXXXXX"; // <-- Put your WhatsApp number here (e.g., 67570000000)
    
    // Core Document Selectors
    const triggerBtn = document.getElementById("whatsapp-gate-trigger");
    const modal = document.getElementById("account-modal");
    const inputField = document.getElementById("ic-account-input");
    const cancelBtn = document.getElementById("modal-cancel-btn");
    const submitBtn = document.getElementById("modal-submit-btn");

    if (!triggerBtn || !modal) return;

    // Intercept default anchor execution to show modal window safely
    triggerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        inputField.value = ""; // Clear out previous stale values
        modal.showModal();     // Opens native accessible modal layer
    });

    // Handle standard modal termination path
    cancelBtn.addEventListener("click", () => {
        modal.close();
    });

    // Processing submission action pipeline
    const processWhatsAppRedirect = () => {
        const accountName = inputField.value.trim();
        
        // Block empty data execution strings
        if (!accountName) {
            inputField.style.borderColor = "var(--accent-color, #ff4a4a)";
            inputField.focus();
            return;
        }

        // 📝 PREMIUM PREFILLED TEXT ENGINE FORMATTING
        const rawMessage = `Hey Otto! It's : ${accountName}. I'm requesting for free access to the BANKBUGS|FX Ecosystem Dashboard. Thanks bro!`;
        
        // URL encode the message to escape spaces, punctuation, and system symbols cleanly
        const encodedMessage = encodeURIComponent(rawMessage);
        const finalUrl = `https://wa.me/67576766296?text=${encodedMessage}`;
        
        // Fire out link securely to external messaging application tabs
        modal.close();
        window.open(finalUrl, "_blank", "noopener,noreferrer");
    };

    // Bind event hooks to activation targets
    submitBtn.addEventListener("click", processWhatsAppRedirect);
    
    // Accessibility Feature: Allow user to press 'Enter' inside input field to submit
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            processWhatsAppRedirect();
        }
    });
});
