console.log("Initialize firebase")

const firebaseConfig = {
    apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
    authDomain: "capstone-project-7f578.firebaseapp.com",
    projectId: "capstone-project-7f578",
    storageBucket: "capstone-project-7f578.appspot.com",
    messagingSenderId: "913886745605",
    appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
  }; 
  const app=firebase.initializeApp(firebaseConfig);
  const db=app.database();
  const auth=app.auth();