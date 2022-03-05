//Click Sign Up
const signUpBtn = document.getElementById("registerBtn");

signUpBtn.onclick = async(e)=>{
    e.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
};

//Click Sign In
const signInBtn = document.getElementById("loginBtn");

signInBtn.onclick = async(e)=>{
    e.preventDefault();
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
};