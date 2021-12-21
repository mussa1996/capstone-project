// const data = firebase.firestore();

const trow = document.querySelector('.singleMessage');
db.collection('messages').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderMessage(doc);
    })
})

function renderMessage(doc){
  
    let fullName = document.querySelector('#name');
    let message = document.querySelector('#accMessage');
    let panel = document.querySelector('.panel');
    let div = document.querySelector('.theMessage');
    const div2 = document.createElement('div')
    div.setAttribute('message-id', doc.id);
    console.log(fullName)
   console.log(doc.data());
    fullName.textContent ='Name: '+doc.data().name;
    message.textContent = 'Message:'+doc.data().message;
    
    
    div.appendChild(fullName);
    panel.appendChild(message);
    div.appendChild(panel);
    trow.appendChild(div);
    
    
}


// const firebaseConfigs = {
//     apiKey: "AIzaSyBZRUa2SA5tgZKtfE9wi2ribWrX76nEu60",
//     authDomain: "capstone-project-7f578.firebaseapp.com",
//     projectId: "capstone-project-7f578",
//     storageBucket: "capstone-project-7f578.appspot.com",
//     messagingSenderId: "913886745605",
//     appId: "1:913886745605:web:a7ac1dc1fc74f72e27b86c"
//   }; 
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfigs);
//   firebase.analytics();
//   const datab = firebase.firestore();
//   console.log("initialize firebase")
//   datab.settings({timestampsInSnapshot:true});

