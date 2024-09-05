// Form validation function
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        return false;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you for your message. We will get back to you soon!";
    
    // Simulate form submission (in reality, you'd use Ajax or form action)
    return false; // Prevent actual form submission for this demo
}

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
