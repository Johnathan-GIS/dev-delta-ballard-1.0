// --- Required Console Logging for Test Accounts ---
console.log(`[DEV] TEST ACCOUNTS
ADMIN
username: admin
password: adminPassword123

USER
username: user
password: userPassword123`);

document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signinForm");
  const registerForm = document.getElementById("registerForm");
  const messageEl = document.getElementById("message");

  // 1. Handle Sign In
  if (signinForm) {
    signinForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const usernameInput = document.getElementById("usernameInput").value.trim();
      const userPwd = document.getElementById("passwordInput").value.trim();

      try {
        const response = await fetch("../data/users.json");
        if (!response.ok) throw new Error("Failed to load user credentials.");

        const users = await response.json();
        const registeredUsers = JSON.parse(sessionStorage.getItem("registeredUsers")) || [];
        const allUsers = [...users, ...registeredUsers];

        const matchedUser = allUsers.find(
          (u) => u.username === usernameInput && u.password === userPwd
        );

        if (matchedUser) {
          console.log(`[AUTH] User authenticated: ${matchedUser.username}`);
          console.log(`[AUTHZ] Role assigned: ${matchedUser.role}`);

          let appState = JSON.parse(sessionStorage.getItem("appState")) || {
            app: { name: "Amazing Travels", version: "0.3" },
            data: [],
            session: { started: new Date().toISOString() }
          };

          appState.user = {
            username: matchedUser.username,
            authenticated: true,
            role: matchedUser.role
          };

          sessionStorage.setItem('appState', JSON.stringify(appState));
          sessionStorage.setItem('signedIn', 'true');

          window.location.href = '../index.html';
        } else {
          messageEl.textContent = "Sign-in failed: Invalid username or password.";
          messageEl.className = "text-danger mt-3 small";
        }

      } catch (error) {
        console.error("[ERROR] Authentication error:", error);
        messageEl.textContent = "An error occurred during sign-in. Make sure data/users.json exists.";
        messageEl.className = "text-danger mt-3 small";
      }
    });
  }

  // 2. Handle Registration
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevents default form refresh

      const regUsername = document.getElementById("regUsernameInput").value.trim();
      const regPassword = document.getElementById("regPasswordInput").value.trim();

      if (!regUsername || !regPassword) {
        messageEl.textContent = "Please fill out all fields.";
        messageEl.className = "text-danger mt-3 small";
        return;
      }

      try {
        let registeredUsers = JSON.parse(sessionStorage.getItem("registeredUsers")) || [];

        // Prevent duplicate usernames
        if (registeredUsers.some(u => u.username === regUsername) || regUsername === "admin" || regUsername === "user") {
          messageEl.textContent = "Username is already taken. Please choose another.";
          messageEl.className = "text-danger mt-3 small";
          return;
        }

        // Save new user account to sessionStorage
        const newUser = {
          username: regUsername,
          password: regPassword,
          role: "user"
        };

        registeredUsers.push(newUser);
        sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        console.log(`[CREATE] New user registered: ${regUsername}`);

        // Update appState with new user session
        let appState = JSON.parse(sessionStorage.getItem("appState")) || {
          app: { name: "Amazing Travels", version: "0.3" },
          data: [],
          session: { started: new Date().toISOString() }
        };

        appState.user = {
          username: newUser.username,
          authenticated: true,
          role: newUser.role
        };

        sessionStorage.setItem('appState', JSON.stringify(appState));
        sessionStorage.setItem('signedIn', 'true');

        messageEl.textContent = "Account created successfully! Redirecting...";
        messageEl.className = "text-success mt-3 small";

        setTimeout(() => {
          window.location.href = '../index.html';
        }, 1000);

      } catch (error) {
        console.error("[ERROR] Registration failed:", error);
        messageEl.textContent = "Unable to complete registration.";
        messageEl.className = "text-danger mt-3 small";
      }
    });
  }

  // Global Sign Out Function (works across all pages and subfolders)
window.signOut = function() {
  try {
    let appState = JSON.parse(sessionStorage.getItem("appState"));
    if (appState) {
      appState.user = { username: null, authenticated: false, role: null };
      sessionStorage.setItem("appState", JSON.stringify(appState));
    }
    sessionStorage.removeItem("signedIn");

    // Automatically detect if we are inside the 'pages/' folder or at root
    const isInsidePages = window.location.pathname.includes('/pages/');
    window.location.href = isInsidePages ? "../index.html" : "index.html";
  } catch (error) {
    console.error("[ERROR] Sign out failed:", error);
    window.location.href = "index.html";
  }
};

if (matchedUser) {
          console.log(`[AUTH] User authenticated: ${matchedUser.username}`);
          console.log(`[AUTHZ] Role assigned: ${matchedUser.role}`);

          // Preserve existing appState data if it exists
          let existingState = JSON.parse(sessionStorage.getItem("appState"));
          
          let appState = {
            app: { name: "Amazing Travels", version: "0.3" },
            data: existingState && existingState.data ? existingState.data : [],
            user: {
              username: matchedUser.username,
              authenticated: true,
              role: matchedUser.role
            },
            session: existingState && existingState.session ? existingState.session : { started: new Date().toISOString() }
          };

          sessionStorage.setItem('appState', JSON.stringify(appState));
          sessionStorage.setItem('signedIn', 'true');

          window.location.href = '../index.html';
        }

        if (matchedUser) {
          console.log(`[AUTH] User authenticated: ${matchedUser.username}`);
          console.log(`[AUTHZ] Role assigned: ${matchedUser.role}`);

          // Preserve existing appState data and session if they exist
          let existingState = JSON.parse(sessionStorage.getItem("appState")) || {};

          let appState = {
            app: existingState.app || { name: "Amazing Travels", version: "0.3" },
            data: existingState.data || [],
            user: {
              username: matchedUser.username,
              authenticated: true,
              role: matchedUser.role
            },
            session: existingState.session || { started: new Date().toISOString() }
          };

          sessionStorage.setItem('appState', JSON.stringify(appState));
          sessionStorage.setItem('signedIn', 'true');

          window.location.href = '../index.html';
        }

});