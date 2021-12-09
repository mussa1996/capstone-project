//form validation script
function validateSignup(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


if(username == ""){
    alert("Please enter your username");
    return false;
}
if(email == ""){
    alert("Please enter your email");
    return false;
}
if(password == ""){
    alert("Please enter your password");
    return false;
}
}
///login validation script
function validateLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

if(email == ""){
    alert("Please enter your email");
    return false;
}
if(password == ""){
    alert("Please enter your password");
    return false;
}
}