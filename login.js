// // Function to toggle between Login and Signup forms
// function showForm(formType) {
//     let loginForm = document.getElementById('loginForm');
//     let signupForm = document.getElementById('signupForm');
//     let loginTab = document.getElementById('loginTab');
//     let signupTab = document.getElementById('signupTab');

//     if (formType === 'login') {
//         loginForm.classList.add('active');
//         signupForm.classList.remove('active');
//         loginTab.classList.add('active');
//         signupTab.classList.remove('active');
//     } else {
//         signupForm.classList.add('active');
//         loginForm.classList.remove('active');
//         signupTab.classList.add('active');
//         loginTab.classList.remove('active');
//     }
// }

// // Set default form to show the login form when the page loads
// window.onload = function() {
//     showForm('login');
// };

// Function to toggle between Login and Signup forms
function showForm(formType) {
    let loginForm = document.getElementById('loginForm');
    let signupForm = document.getElementById('signupForm');
    let loginTab = document.getElementById('loginTab');
    let signupTab = document.getElementById('signupTab');

    if (formType === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

// Initialize Google OAuth2.0 for login
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    
    // Typically, you would send the token to your server for verification and user creation/login.
    // For now, let's assume the login/signup is successful and redirect to home page.

    // Simulate successful login/signup (After verification on server)
    setTimeout(function() {
        window.location.href = 'index.html'; // Redirect to home page (adjust URL based on your project)
    }, 1000);  // Simulates a delay before redirection
}

// Load the Google API client and initiate login when user clicks the button
window.onload = function () {
    showForm('login');

    // Configure the Google OAuth client
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',  // Replace with your actual Google Client ID
        callback: handleCredentialResponse
    });

    // Add event listeners to Google login/signup buttons
    document.getElementById('googleLoginBtn').addEventListener('click', function () {
        google.accounts.id.prompt(); // Open Google login popup
    });

    document.getElementById('googleSignupBtn').addEventListener('click', function () {
        google.accounts.id.prompt(); // Open Google signup popup
    });
};
