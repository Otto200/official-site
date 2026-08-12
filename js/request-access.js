function redirectToWhatsApp() {
  // Target routing variables
  const whatsappNumber = "67576766296"; 
  
  // Professional pre-filled template message focused on account deployment instead of personal identity data
  const messageText = "Hi Otto, Im interested to get started with your help";
  const encodedMessage = encodeURIComponent(messageText);
  
  // Construct final API endpoint URL
  const whatsappUrl = `https://wa.me/67576766296?text=${encodedMessage}`;
  
  // Open communication channel in a secure new viewport window
  window.open(whatsappUrl, '_blank');
}
