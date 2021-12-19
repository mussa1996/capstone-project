var firebaseConfig = {
  apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
  authDomain: "capstone-project-7f578.firebaseapp.com",
  projectId: "capstone-project-7f578",
  databaseURL: "https://capstone-project-7f578-default-rtdb.firebaseio.com",
  storageBucket: "capstone-project-7f578.appspot.com",
  messagingSenderId: "913886745605",
  appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
};



 // Initialize Firebase
 const app=firebase.initializeApp(firebaseConfig);
  const db=app.database();
//  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();
//  const auth=firebase.auth();
//  const auth = firebase.auth();
//  const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});



// export {
//     auth,
//     db
// }


// console.log("Initialize firebase")

// const firebaseConfig = {
//     apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
//     authDomain: "capstone-project-7f578.firebaseapp.com",
//     projectId: "capstone-project-7f578",
//     databaseURL: "https://capstone-project-7f578-default-rtdb.firebaseio.com",
//     storageBucket: "capstone-project-7f578.appspot.com",
//     messagingSenderId: "913886745605",
//     appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
//   }; 
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   const db = firebase.firestore();
//   console.log("initialize firebase")
//   db.settings({timestampsInSnapshot:true});

//   export {
//     auth,
//     db
// }
  // const app=firebase.initializeApp(firebaseConfig);
  // const db=app.database();
  // const auth=app.auth();


//   const signup=document.getElementById("form");
// const signupFunction=()=>{
//   const username=document.getElementById("username");
//   const email=document.getElementById("email");
//   const password=document.getElementById("password");
//   auth.createUserWithEmailAndPassword(username,email,password)
//   .then(()=>{
//     console.log("signup successfully")
//   })
//   .catch(err=>{
//     console.error(err);
//   })
// }

// const username=document.getElementById("username");
//   const email=document.getElementById("email");
//   const password=document.getElementById("password");
// firebase.auth().createUserWithEmailAndPassword(username, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });


// signup.addEventListener('submit',signupFunction);


