
let form = document.querySelector('#myContactForm')

form.addEventListener('submit', (e)=>{
        e.preventDefault();
       
          db.collection('messages').add({
            usename: form.username.value,
            email: form.email.value,
            message: form.message.value
        }).then(function(){
            alert('Message sent..');
            form.reset();
        })
        
        })