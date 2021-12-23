let form = document.querySelector('#myContactForm')
form.addEventListener('submit', (e)=>{
        e.preventDefault();
       const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const message=document.getElementById("message").value;
          db.collection('messages').add({
             name,
             email,
             message,
        }).then(function(){
            // alert('Message sent..');
            Toastify({
              text: "Message sent..",
              className: "info",
              style: {
                background: "linear-gradient(to right, #b02400, #b03000)",
              }
            }).showToast();
            form.reset();
        })
        
        })

        // const firebaseConfig= {
        //   apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
        //   authDomain: "capstone-project-7f578.firebaseapp.com",
        //   projectId: "capstone-project-7f578",
        //   storageBucket: "capstone-project-7f578.appspot.com",
        //   messagingSenderId: "913886745605",
        //   appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
        // }; 
        // // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
        // const db = firebase.firestore();
        // console.log("initialize firebase")
        // db.settings({timestampsInSnapshot:true});