// Firebase config (आपका)
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "mahadev-services.firebaseapp.com",
  projectId: "mahadev-services",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "admin/dashboard.html";
    })
    .catch(err => alert(err.message));
}

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.href = "../login.html";
  });
}
