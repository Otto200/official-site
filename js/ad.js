
document.addEventListener("DOMContentLoaded", function() {
    // Session state identifier block to enforce clean single-display rules
    const hasSeenAnnouncement = localStorage.getItem("bb_launch_notified");
    const modalOverlay = document.getElementById("launch-announcer-overlay");
    
    if (!modalOverlay) return;

    if (!hasSeenAnnouncement) {
        // Subtle activation buffer delay to allow standard page entrance sequences to complete
        setTimeout(function() {
            modalOverlay.style.display = "flex";
            // Temporarily pins body tracking bounds to stop background scrolling shifts
            document.body.style.overflow = "hidden";
        }, 1500);
    }
});

function closeAnnouncerPopup() {
    const modalOverlay = document.getElementById("launch-announcer-overlay");
    if (modalOverlay) {
        modalOverlay.style.opacity = "0";
        modalOverlay.style.transition = "opacity 0.25s ease";
        
        setTimeout(function() {
            modalOverlay.style.display = "none";
            document.body.style.overflow = ""; // Restores standard framework scroll bounds
        }, 250);
    }
    // Encodes persistence token so the popup stops intrusive multi-load bursts on recurring visits
    localStorage.setItem("bb_launch_notified", "true");
}

