

const names = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement=document.getElementById('error');
const errorlogin=document.getElementById('error-login');
const form1=document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    let messages=[];
    if(names.value===''||names.value==null){
        messages.push('Name is required');
        
    }
    if(email.value===''||email.value==null){
        messages.push('Email is required');
    }
    if(password.value===''||password.value==null){
        messages.push('Password is required');
    }
    if(messages.length>0){
        e.preventDefault();
        errorElement.innerText=messages.join(',');
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

