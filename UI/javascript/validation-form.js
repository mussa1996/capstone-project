

const names = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorUsername=document.getElementById('username-error');
const errorEmail=document.getElementById('email-error');
const errorPassword=document.getElementById('password-error');
const errorlogin=document.getElementById('error-login');
const form1=document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    let messages=[];
    // e.preventDefault();
    // if(names.value===''||names.value==null){
    //     errorUsername.innerHTML="please enter your name"
    //     setTimeout(function(){
    //         errorUsername.fadeOut();
    //     },3000);
    // //    if(names.length>0)
    // //      {  e.preventDefault();
    // //         errorUsername.remove(); 
    // //         }
            
    // }
    // if(email.value===''||email.value==null){
       
    //         errorEmail.innerHTML="Please enter your email"
    //     }
    //      if(password.value===''||password.value==null){
           
    //     errorPassword.innerHTML="Please enter your password"
    // }
    // if(messages.length>0){
    //     errorUsername.innerHTML="please enter your name"
    // }
    if(names.value===''||names.value==null){
        messages.push('Name is required');
        
    }
    if(email.value===''||email.value==null){
        messages.push('Email is required');
    }
    if(password.value===''||password.value==null){
        messages.push('Password is required');
        if(password.length<8){
            messages.push('password must be at least 8 characters');
        }
    }
    if(messages.length>0){
        e.preventDefault();
        errorUsername.innerText=messages.join(',');
    }
})

form1.addEventListener('submit',(e)=>{
    let messages=[];
   
    if(email.value===''||email.value==null){
        messages.push('Email is required');
    }
    if(password.value===''||password.value==null){
        messages.push('Password is required');
    } else if(password.length<8){
        messages.push('password is short');
    }
    else{
        messages.push('wawuu good passwaord');
    }
    if(messages.length>0){
        e.preventDefault();
        errorlogin.innerText=messages.join(',');
    }
})

