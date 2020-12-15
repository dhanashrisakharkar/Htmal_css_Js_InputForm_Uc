/******************************************************************************************************************
 * @program :- Javascript File For Input Forms Page Using Regex For Vlidation.
 * @Name :-Dhanashri Sakhrakar
 * @FileName :-Simple_inputForm.js
 * 
 ******************************************************************************************************************/

/**
 * Creating the variable salary and goint to document and (going  to the query this salary element) saying query the salary element that it will change it on depends on value
 */
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;

/**
 * range has to be change on page so it will happen with this syntax (attaching the function to input event(listen) which is in the salary)
 * and value will be set which is present in slider 
 * event listening the input event to give the range as per required (making sure that it is setting value of text content) 
 */
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
/**
 *text elemt goes for query  while it is text form and text error eill go to query selector to show on screen
 *@param : line 23 is that it will check the input is right or not if not it will show the error listener will check the format
 *@param : line 24 Regex checking for name 
 */
const text = document.querySelector('#text')
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z](1)[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = " ";
    } else {
        textError.textContent = "Name is Incorrect"
    }
});
/**
 * @param: for Password Validation on Page
 */
const pwd = document.querySelector('#pwd')
const pwdError = document.querySelector('.pwd-error');
pwd.oninput = function () {
    let pwdRegex = RegExp('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/');
    if (pwdRegex.test(pwd.value)) {
        pwdError.textContent = " ";
    } else {
        pwdError.textContent = "password is Incorrect"
    }
};

/**
 * @param :Email Validation om Page
 */

const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error');
email.oninput = function () {
    // let emailRegex = RegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    let emailRegex = RegExp('^[a-zA-Z]{8,}[0-9]{1,}(@){1}[a-z]{3,}(.)[a-z]{3,}$')
    if (emailRegex.test(email.value)) {
        emailError.textContent = " ";
    } else {
        emailError.textContent = "email is Incorrect"
    }
};

/**
 *@param: Telephone Validation
 */
const tel = document.querySelector('#tel')
const telError = document.querySelector('.tel-error');
tel.oninput = function () {
    let telRegex = RegExp('((91){1}[""])?[0-9]{10}$');
    if (telRegex.test(tel.value)) {
        telError.textContent = " ";
    } else {
        telError.textContent = "password is Incorrect"
    }
};

