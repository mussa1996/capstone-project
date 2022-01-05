
 
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
  const trow = document.querySelector('#articleTitles');
  
  function renderMessage(doc){
      let li = document.createElement('li');
      let div = document.createElement('div');
      let name = document.createElement('span');
      let action1 = document.createElement('button');
      // name.style.color='red';
      let message = document.createElement('span');
  
      li.setAttribute('message-id', doc.id);
      name.textContent =  doc.data().name  + ' : ' + doc.data().message;
      action1.textContent = 'delete';
      li.appendChild(name);
      li.appendChild(div.appendChild(action1));
      trow.appendChild(li);
     
      action1.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('message-id');
            // if(confirm('are you sure you want to delete this article?'
            // )){
                db.collection('messages').doc(id).delete().then(()=>{
                    // alert('article deleted successful')
                    Toastify({
                      text: "Message deleted successful",
                      className: "info",
                      style: {
                        background: "linear-gradient(to right, #b02400, #b03000)",
                      }
                    }).showToast();
                }); 
            
            
    })

  }
  
//   db.collection('messages').get().then((snapshot)=>{
//     snapshot.docs.forEach(doc=>{
//       renderMessage(doc);
//     })
// })
  window.onload=function(){
    db.collection('messages').onSnapshot(snapshot =>{
        let changes =snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
              renderMessage(change.doc);
            }
            else if(change.type == 'removed'){
                let art =document.querySelector('[message-id =' +change.doc.id +']');
                trow.removeChild(art);
            }
        })
    })
}
  
  // db.collection('messages').get().then((snapshot)=>{
  //     snapshot.docs.forEach(doc=>{
  //       renderMessage(doc);
  //     })
  // })
  

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

  
  
  
   
  
  