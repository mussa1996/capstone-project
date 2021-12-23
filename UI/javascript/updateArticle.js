let id=location.hash.slice(1);
const file = document.querySelector('#pic').value;
let changed = false;

let image=''
db.collection('articles').doc(id).get().then((article)=>{
    image=article.data().picture;
}) 

function renderArticle(article){
    const title=document.querySelector('#title');
    const summary=document.querySelector('#summary');
    const content=document.querySelector('#content');
    const picture = document.querySelector('#updateImage')
    title.value=article.title;
    content.value=article.content;
    summary.value = article.summary;
    picture.src= image;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 
// file.addEventListener('change', (e) =>{
//     changed=true;
//     fil= e.target.files[0];
// })


const form=document.querySelector('#addArticle');



if (file===null){
 console.log(file)
 form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('articles').doc(id).update({
             content: form.content.value,
            summary: form.summary.value,
            title: form.title.value,
            picture: doc(id).get().picture
    }).then(function(){
        // alert('updated successfully')
        Toastify({
            text: "Good job.. updated successfully",
            className: "info",
            style: {
              background: "linear-gradient(to right, #b02400, #b03000)",
            }
            
          }).showToast();
        window.location.href = "dashboard.html";
    })

    form.reset()
    
})
}else{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
         console.log('nothing')
            uploadImage();
        })
    
}






function uploadImage(){
    //get image
    let images = document.querySelector('#pic').files[0];
    console.log("file is ",file)
    if(images==null){
        images = image;
    }
    console.log("image 2 is ",images)
    const imageName = images.name;
    //ref to root storage + image storage
    var storageRef = firebase.storage().ref('images/'+imageName);
    //upload image to selected storage
    const uploadTask = storageRef.put(images);
    //get upload progress
    uploadTask.on('state_changed', function(snapshot){
        //get progress
        const progress = (snapshot.bytestransferred/snapshot.totalBytes)*100;
        console.log("Upload is " +progress+ " done");
    }, function(error){
        //handle errors
        console.log(error.message);
    }, function(){
        //handle successful upload
        
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
          console.log(downloadURL)
                db.collection('articles').doc(id).update({
                    content: form.content.value,
                   summary: form.summary.value,
                   title: form.title.value,
           }).then(function(){
            //    alert('updated successfully')
            Toastify({
                text: "Good job.. updated successfully",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #b02400, #b03000)",
                }
                
              }).showToast();
               window.location.href = "dashboard.html";
           })
            db.collection('articles').doc(id).update({
                picture: downloadURL,
                content: form.content.value,
                summary: form.summary.value,
                title: form.title.value
            }).then(function(){
                // alert('Successfuly updated!');
                Toastify({
                    text: "Good job.. updated successfully",
                    className: "info",
                    style: {
                      background: "linear-gradient(to right, #b02400, #b03000)",
                    }
                    
                  }).showToast();
                form.reset();
                window.location.href = "dashboard.html";
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





