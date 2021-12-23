
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
    Toastify({
      text: "Signup success.. Welcome to login page",
      className: "info",
      style: {
        background: "linear-gradient(to right, #b02400, #b03000)",
      }
      
    }).showToast();
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
   if(email=="niyodusengamussa@gmail.com"){
  
    Toastify({
      text: "Login success.. Welcome Admin",
      className: "info",
      style: {
        background: "linear-gradient(to right, #b02400, #b03000)",
      }
      
    }).showToast();
    window.location.href="dashboard.html";
    
    }
    else{
      Toastify({
        text: "Login success.. Welcome blog page",
        className: "info",
        style: {
          background: "linear-gradient(to right, #b02400, #b03000)",
        }
        
      }).showToast();
    window.location.href="blogs-new.html";
    }
    signinForm.reset();
  }).catch(error => {
        
    switch (error.code) {
       case 'auth/user-not-found':
        document.querySelector('#error').textContent='user not found';
         break;
       case 'auth/invalid-email':
        document.querySelector('#error-login').textContent='invalid email';
         break;
     
       case 'auth/weak-password':
        document.querySelector('#error-login').textContent='weak password';
         break;
       default:
        document.querySelector('#error').textContent ='password and email are incorrect';
         break;
     }
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
