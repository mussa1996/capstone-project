// signup
const signupForm = document.querySelector('#form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const username = signupForm['username'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(username,email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    window.location.href="dashboard.html";
    signupForm.reset();
  });
});