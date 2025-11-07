function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (31 * hash + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
}

if (localStorage.getItem("current-user")) {
  window.location.href = "index.html";
}

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");

showSignup.addEventListener("click", () => {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

showLogin.addEventListener("click", () => {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;

  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    alert("Username already exists");
    return;
  }

  users.push({
    username: username,
    password: hash(password),
  });
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("current-user", username);

  window.location.href = "index.html";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (user) => user.username === username && user.password === hash(password)
  );
  if (!user) {
    alert("Invalid username or password");
    return;
  }

  localStorage.setItem("current-user", username);

  window.location.href = "index.html";
});
