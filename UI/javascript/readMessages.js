
  
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

  
  
  
   
  
  