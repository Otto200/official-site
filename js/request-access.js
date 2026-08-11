
function redirectToWhatsApp() {
  // Get the value typed by the user
  const userName = document.getElementById('ic-name-input').value.trim();
  
  if (userName === "") {
    alert("Please enter your registered full IC Name to proceed.");
    return;
  }
  
  // REPLACE 67570000000 WITH YOUR ACTUAL WHATSAPP NUMBER WITH COUNTRY CODE (675 for PNG)
  const whatsappNumber = "67576766296"; 
  
  // Create your custom URL-encoded pre-filled text message
  const messageText = `Hi Otto, I have completed the IC Markets setup. Please send me access to BANKBUGS|FX ecosystem. My registered full name is: ${userName}`;
  const encodedMessage = encodeURIComponent(messageText);
  
  // Construct the final API URL
  const whatsappUrl = `https://wa.me/67576766296?text=${encodedMessage}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
}

