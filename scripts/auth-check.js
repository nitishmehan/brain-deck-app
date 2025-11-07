const currentUser = localStorage.getItem('current-user');

if (!currentUser) {
    window.location.href = 'auth.html';
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('current-user');
        window.location.href = 'auth.html';
    }
}

function getCurrentUser() {
    return localStorage.getItem('current-user');
}