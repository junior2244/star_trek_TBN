function startLoading() {
    // Hide the login screen and show loading screen
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';
    
    // Simulate loading process
    setTimeout(() => {
        document.querySelector('.progress-bar').style.width = '100%'; // Fill progress bar
    }, 500); // Short delay before the progress bar starts filling

    // Simulate a successful login after 3 seconds (or you can customize as needed)
    setTimeout(() => {
        alert('Login Successful!');
        window.location.href = 'home.html'; // You can redirect to another page
    }, 5000); // After 5 seconds, the login is successful
}
