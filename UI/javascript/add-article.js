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

