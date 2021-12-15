
const names = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = names.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(names, 'Username is required');
    }
    else {
        setSuccess(names);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
 
};


// login javascript

const emails = document.getElementById('email-login');
const passwords = document.getElementById('password-login');
const form1 = document.getElementById('form1');
form1.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

const setErrors = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-login');

    errorDisplay.innerText = message;
    inputControl.classList.add('error-login');
    inputControl.classList.remove('success')
}

const setSuccesss = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-login');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error-login');
};

const isValidEmails = emails => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emails).toLowerCase());
}

const validateInput = () => {
    const emailValue = emails.value.trim();
    const passwordValue = passwords.value.trim();

    if(emailValue === '') {
        setErrors(emails, 'Email is required');
    } else if (!isValidEmails(emailValue)) {
        setErrors(emails, 'Provide a valid email address');
    } else {
        setSuccesss(emails);
    }

    if(passwordValue === '') {
        setErrors(passwords, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setErrors(passwords, 'Password must be at least 8 character.')
    } else {
        setSuccesss(passwords);
    }
 
};