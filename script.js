function startLoading() {
    const users = [
        { username: 'captain', password: 'enterprise', role: 'high-command' },
        { username: 'commander', password: 'command01', role: 'command' },
        { username: 'officer', password: 'officer123', role: 'officer' },
        { username: 'crewman', password: 'crewman456', role: 'crewman' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Save user data in localStorage
        localStorage.setItem('loggedIn', JSON.stringify(user));
        window.location.href = 'home.html'; // Redirect to the respective home page
    } else {
        alert('Invalid credentials');
    }
}
