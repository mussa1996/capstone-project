
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
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    window.location.href="dashboard.html";
    signupForm.reset();
  });
});
// const firebase =require('./init-firebase')

// const signup=document.getElementById("form");
// const signupFunction=()=>{
//   const username=document.getElementById("username");
//   const email=document.getElementById("email");
//   const password=document.getElementById("password");
//   firebase.auth.createUserWithEmailAndPassword(username,email,password)
//   .then(()=>{
//     console.log("signup successfully")
//   })
//   .catch(err=>{
//     console.error(err);
//   })
// }


// signup.addEventListener('submit',signupFunction);


 
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
