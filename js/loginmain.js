// import "../css/style.css"
import { account } from "../auth"

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const profileScreen = document.getElementById('profile-screen');
const loginScreen = document.getElementById('login-screen');

async function handleLogin() {
    account.createOAuth2Session(
        'google',
        'https://travelhubng.netlify.app/',
        'https://travelhubng.netlify.app/fail'
    );
}

async function getUser() {
    try {
        const user = await account.get();
        renderProfileScreen(user);
    } catch (error) {
        renderLoginScreen();
    }
}

function renderLoginScreen() {
    loginScreen.classList.remove('hidden');
    profileScreen.classList.add('hidden');
}

function renderProfileScreen(user) {
    loginScreen.classList.add('hidden');
    profileScreen.classList.remove('hidden');
    profileScreen.innerHTML = `
        <h2>Welcome, ${user.name}!</h2>
        <button id="logout-btn">Logout</button>
    `;
    // Add logout functionality
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
}

async function handleLogout() {
    try {
        await account.deleteSession('current');
        renderLoginScreen();
    } catch (error) {
        console.error('Logout failed', error);
    }
}

// Event listeners for login and logout buttons
loginBtn.addEventListener('click', handleLogin);
getUser();
