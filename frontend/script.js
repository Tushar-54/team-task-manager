const API = "http://localhost:5000/api";

// REGISTER
function register(){
  fetch(API+"/auth/register",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("r_email").value,
      password: document.getElementById("r_password").value,
      role: document.getElementById("role").value
    })
  })
  .then(res=>res.text())
  .then(data=>{
    alert(data);
  });
}

// LOGIN
function login(){
  fetch(API+"/auth/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res=>res.json())
  .then(data=>{
    localStorage.setItem("user", JSON.stringify(data));
    window.location="dashboard.html";
  });
}