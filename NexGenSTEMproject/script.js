// Function 1: The Helper Function
function isValidPhoneNumber(phoneInput) {
    const digits = phoneInput.replace(/\D/g, ''); 
    return digits.length === 10;
}

// Function 2: The Primary Calling Function (Now uses visual feedback)
function validateForm(event) {
    event.preventDefault(); 
    
    const phoneField = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const form = document.querySelector('.contact-form');
    let formIsValid = true; // Assume true until a failure is found

    // Reset previous error states
    phoneField.style.border = '';
    phoneError.style.display = 'none';

    // Call the helper function (Function 1)
    const isPhoneValid = isValidPhoneNumber(phoneField.value); 
    
    if (!isPhoneValid) {
        // ERROR PATH: Apply visual styles and set flag to false
        phoneField.style.border = '2px solid red';
        phoneError.style.display = 'block';
        phoneField.focus();
        formIsValid = false;
    }
    
    // Check other fields (e.g., email or name validation logic would go here)
    // ...

    if (formIsValid) {
        // SUCCESS PATH: All checks passed.
        alert("✅ Form validated successfully! Your information is being sent.");
        // If ready for full submission:
        // form.submit(); 
    }
}

// Event Listener
document.addEventListener('DOMContentLoaded', function() {
    const formElement = document.querySelector('.contact-form');
    if (formElement) {
        formElement.addEventListener('submit', validateForm);
    }
});