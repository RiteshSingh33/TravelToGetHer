const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});

function checkPassword() {
    var c = document.getElementById("exampleInputPassword1").value;
    var d = document.getElementById("exampleInputPassword2").value;
    var isValid = true;

    // Password length check
    if (c == "") {
       document.getElementById('pass1').innerHTML = "*It is mandatory";
       isValid = false;
    } else if (c.length < 8 || c.length > 15) {
       document.getElementById('pass1').innerHTML = "Password should be between 8 to 15";
       isValid = false;
    } else {
       document.getElementById('pass1').innerHTML = "";

       var numb = false;
       var smallA = false;
       var bigA = false;
       var spChar = false;

       for (var i = 0; i < c.length; i++) {
             var ch = c[i];
             if (!isNaN(ch)) {
                numb = true;
             } else if (ch >= 'a' && ch <= 'z') {
                smallA = true;
             } else if (ch >= 'A' && ch <= 'Z') {
                bigA = true;
             } else if (ch == '@' || ch == '#' || ch == '$' || ch == '&') {
                spChar = true;
             }
       }

       if (!(numb && smallA && bigA && spChar)) {
             document.getElementById('pass1').innerHTML = "Password should contain at least a lowercase, an uppercase, a digit, and a special character.";
             isValid = false;
       }
    }

    // Confirm password check
    if (d == "") {
       document.getElementById('pass2').innerHTML = "*It is mandatory";
       isValid = false;
    } else if (d != c) {
       document.getElementById('pass2').innerHTML = "Re-entered Password is not same";
       isValid = false;
    } else {
       document.getElementById('pass2').innerHTML = "";
    }

    return isValid;
 }