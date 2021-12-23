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

db.settings({timestampsInSnapshots:true});


