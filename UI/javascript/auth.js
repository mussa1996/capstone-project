
// console.log(auth)
// signup

const signupForm = document.querySelector('#form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const username = signupForm['username'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    console.log("hey user")
    window.location.href="login.html#form1";
    signupForm.reset();
  });
});

// signin after to signup
const signinForm = document.querySelector('#form1');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signinForm['email-login'].value;
  const password = signinForm['password-login'].value;

  // sign in the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {

    console.log(cred.user);
    console.log("hey user")
    window.location.href="dashboard.html";
    signinForm.reset();
  });
});


 
  const firebaseConfig = {
    apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
    authDomain: "capstone-project-7f578.firebaseapp.com",
    projectId: "capstone-project-7f578",
    storageBucket: "capstone-project-7f578.appspot.com",
    messagingSenderId: "913886745605",
    appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
  }; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  const db = firebase.database();
  const auth=firebase.auth();
//   console.log("initialize firebase")
//   db.settings({timestampsInSnapshot:true});
