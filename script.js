function startLoading() {
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the fields are not empty
    if (!username || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Hide the login screen and show the loading screen
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';
    
    // Simulate loading process
    setTimeout(() => {
        document.querySelector('.progress-bar').style.width = '100%'; // Fill progress bar
    }, 500); // Short delay before the progress bar starts filling

    // Simulate an AJAX request to authenticate (replace with real backend API)
    setTimeout(() => {
        // In this case, we simulate a successful login
        if (username === 'captain' && password === 'enterprise') {
            // Save login status to local storage (simulating backend validation)
            localStorage.setItem('loggedIn', true);
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            alert('Invalid login credentials');
            document.querySelector('.login-container').style.display = 'block';
            document.getElementById('loading-screen').style.display = 'none';
        }
    }, 5000); // Simulate a 5-second login process
}
