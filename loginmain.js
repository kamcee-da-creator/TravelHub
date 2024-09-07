// const loginBtn = document.getElementById('login-btn');
// const loginScreen = document.getElementById('login-screen');
// const profileScreen = document.getElementById('profile-screen');
// const usernameElem = document.getElementById('username');
// const logoutBtn = document.getElementById('logout-btn');

// const clientId = '816654399321-lc1m3suo4bfdn9b2odpsm1gn3u5ubqf6.apps.googleusercontent.com'; // Replace with your Google OAuth Client ID
// const redirectUri = 'http://localhost:5500/login.html';
//  // The URL Google redirects to after login

// // Step 1: Login with Google OAuth2
// function handleLogin() {
//     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=profile%20email`;
//     window.location.href = authUrl;
// }

// // Step 2: Check for access token in URL (after redirection)
// function checkForAccessToken() {
//     const hash = window.location.hash;
//     if (hash.includes('access_token')) {
//         const params = new URLSearchParams(hash.substring(1));
//         const accessToken = params.get('access_token');
//         fetchUserProfile(accessToken);
//     } else {
//         renderLoginScreen();
//     }
// }

// // Step 3: Fetch user profile from Google using access token
// async function fetchUserProfile(accessToken) {
//     try {
//         const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
//             headers: { Authorization: `Bearer ${accessToken}` }
//         });
//         const user = await response.json();
//         renderProfileScreen(user);
//     } catch (error) {
//         console.error('Failed to fetch user profile:', error);
//     }
// }

// // Render login screen
// function renderLoginScreen() {
//     loginScreen.classList.remove('hidden');
//     profileScreen.classList.add('hidden');
// }

// // Render profile screen
// function renderProfileScreen(user) {
//     loginScreen.classList.add('hidden');
//     profileScreen.classList.remove('hidden');
//     usernameElem.textContent = user.name || 'User';
// }

// // Handle logout
// function handleLogout() {
//     window.location.href = 'http://127.0.0.1:5500/login.html';
// }

// // Event listeners
// loginBtn.addEventListener('click', handleLogin);
// logoutBtn.addEventListener('click', handleLogout);

// // Check if access token exists on page load
// checkForAccessToken();


const loginBtn = document.getElementById('login-btn');
const loginScreen = document.getElementById('login-screen');
const profileScreen = document.getElementById('profile-screen');
const usernameElem = document.getElementById('username');
const userImgElem = document.getElementById('user-img'); // Get the image element
const logoutBtn = document.getElementById('logout-btn');

const clientId = '816654399321-lc1m3suo4bfdn9b2odpsm1gn3u5ubqf6.apps.googleusercontent.com'; // Replace with your Google OAuth Client ID
// const redirectUri = 'http://localhost:5500/login.html'; // The URL Google redirects to after login
const redirectUri = 'https://travelhubng.netlify.app/login.html'; // The URL Google redirects to after login

// Step 1: Login with Google OAuth2
function handleLogin() {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=profile%20email`;
    window.location.href = authUrl;
}

// Step 2: Check for access token in URL (after redirection)
function checkForAccessToken() {
    const hash = window.location.hash;
    if (hash.includes('access_token')) {
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get('access_token');
        fetchUserProfile(accessToken);
    } else {
        renderLoginScreen();
    }
}

// Step 3: Fetch user profile from Google using access token
async function fetchUserProfile(accessToken) {
    try {
        const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const user = await response.json();
        renderProfileScreen(user);
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
    }
}

// Render login screen
function renderLoginScreen() {
    loginScreen.classList.remove('hidden');
    profileScreen.classList.add('hidden');
}

// Render profile screen
function renderProfileScreen(user) {
    loginScreen.classList.add('hidden');
    profileScreen.classList.remove('hidden');
    usernameElem.textContent = user.name || 'User';
    userImgElem.src = user.picture || 'default_profile.png'; // Set the source of the image element
}

// Handle logout
function handleLogout() {
    window.location.href = 'http://127.0.0.1:5500/login.html';
}

// Event listeners
loginBtn.addEventListener('click', handleLogin);
logoutBtn.addEventListener('click', handleLogout);

// Check if access token exists on page load
checkForAccessToken();

document.getElementById('logout-btn').addEventListener('click', function() {
    // Hide the profile screen and show the settings screen
    document.getElementById('settings-container').classList.add('hidden');
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('settings-screen').classList.remove('hidden');
 
});

// Additional JavaScript to manage settings toggling would go here
