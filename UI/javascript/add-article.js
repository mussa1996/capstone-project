
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
  firebase.analytics();
  const db = firebase.firestore();
  console.log("initialize firebase")
  db.settings({timestampsInSnapshot:true});
const auth=firebase.auth();
  
auth.onAuthStateChanged(user=>{
    if(!user){
      window.location.href="login.html";
    }
  })
const form = document.querySelector('#addArticle');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
 
      uploadImage();
  
  })

  function uploadImage(){
    //get image
    const image = document.querySelector('#pic').files[0];
    const imageName = image.name;
    //ref to root storage + image storage
    var storageRef = firebase.storage().ref('images/'+imageName);
    //upload image to selected storage
    const uploadTask = storageRef.put(image);
    //get upload progress
    uploadTask.on('state_changed', function (snapshot){
        //get progress
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("Upload is " +progress+ " done");
    }, function(error){
        //handle errors
        console.log(error.message);
    }, function(){
        //handle successful upload
        
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            db.collection('articles').add({
                picture: downloadURL,
                content: form.content.value,
                summary: form.summary.value,
                title: form.title.value
            }).then(function(){
                // alert('Successfuly uploaded!');
                Toastify({
                    text: "Successfuly uploaded!",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #b02400, #b03000)",
                    }
                }).showToast();
                form.reset();
                // window.location.href = "dashboard.html";
            })
            .catch(function(error) {
                // alert('Error uploading post, Try again!');
                Toastify({
                    text: "Error uploading post, Try again!",
                    className: "info",
                    style: {
                      background: "linear-gradient(to right, #b02400, #b03000)",
                    }
                  }).showToast();
            });
             
        });
      
    });   
};

const logout = document.querySelector('#logout');
  if(logout){
    logout.addEventListener('click', (e)=>{
      e.preventDefault()
      console.log('logout clicked')
      auth.signOut().then(()=>{
        window.location.href="login.html";
      })
  })
  }
