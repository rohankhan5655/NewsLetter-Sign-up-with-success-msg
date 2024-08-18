let inPut = document.querySelector(".input-email"); // Select by class (more specific)
let Button = document.querySelector("#subButton");
let errorMessage = document.querySelector(".error-p"); // Get reference to error message container
let Card = document.querySelector(".card");
let thxCard = document.querySelector("#thank-card") // acces success card
let disButton = document.querySelector("#disButton") //accessing Dismiss button
let i_Value;
const loader = document.querySelector('.loader');
const cardContainer = document.querySelector('.card-container');


function onChange() {
  i_Value = inPut.value;
  validateEmail(i_Value);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email format
  let hasAtSymbol = email.includes("@");
  let hasDotCom = email.toLowerCase().endsWith(".com"); // Check for ".com" (case-insensitive)

  if (!emailRegex.test(email) || !hasAtSymbol || !hasDotCom) {
    
    inPut.classList.remove("input-email");
    inPut.classList.add("input-e");
    errorMessage.classList.remove("hidden"); // Display error message
    thxCard.classList.add("hidden")
  } else {
    
    const submittedEmailParagraph = document.getElementById('submittedEmail');
    submittedEmailParagraph.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`; 
    inPut.classList.remove("input-e");
    inPut.classList.add("input-email");
    errorMessage.textContent = ""; // Clear error message
    errorMessage.classList.add("hidden"); // Hide error message
    Card.classList.add("hidden"); // Hide card (optional on success)
   thxCard.classList.remove("hidden")
  }
}

Button.addEventListener("click", () => {
  validateEmail(i_Value); // Validate email again on button click (optional)
});
disButton.addEventListener("click", ()=> {
  
  
  thxCard.classList.add("hidden")
})
// Function to show and hide the loader
function toggleLoader(show) {
  if (show) {
    loader.style.display = 'block';
    cardContainer.style.display = 'none';
  } else {
    loader.style.display = 'none';
    cardContainer.style.display = 'flex';
  }
}

// Initial state: show loader
toggleLoader(true);

// Simulate some asynchronous operation (replace with your actual logic)
function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Simulate completion after 2 seconds
    }, 2000);
  });
}

// Example usage:
simulateAsyncOperation()
  .then(() => {
    // Hide loader after the operation completes
    toggleLoader(false);
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle errors, e.g., show an error message
  });