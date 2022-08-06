const forms = document.querySelector(".forms"),
passShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

//------------------------------LOGIN---------------------------------------------

/*
function check(email,pass) {
  if(localStorage.getItem(email)){
      var str = localStorage.getItem("email",email);
      var cpass = localStorage.getItem("pass",email);
      if(cpass == pass)
          return true;
      else
          return false;
  }
  return false;
}
*/


function login(){
  var email;
  var pass;
  email = document.getElementById('email').value;
  pass = document.getElementById('pass').value;
  
  var user= localStorage.getItem(email);
  var data = JSON.parse(user);
  console.log(data);

  if(email == null || pass == null){
    alert("Please fill the details")
  } 
  else if(email == data.email && pass == data.password)
  {
    window.location = "Coming soon Page/welcome.html";
    alert("Logged in!");
   

  } 
  else{
    alert("Wrong id or password");
  }
}
/*

  if(check(email,pass)){
      alert("Logged In!");
  }
  else
      alert("Wrong id or password");
}

*/

//-----------SIGN UP---------------//
function check_exist(email) {
  if(localStorage.getItem(email))
      return true;
  else
      return false;
}

if(!check_exist(email)){
function signup() {
  var email, pass;
  email = document.getElementById('email1').value;
  pass = document.getElementById('pass1').value;


var user={
  email:email,
  password:pass,
};

var json = JSON.stringify(user);
localStorage.setItem(email,json);
alert("Signup completed");
}
}
else{
  alert("student id already exist");
  //window.location.href = "index.html";
}

/*
  if(!check_exist(email)){
      localStorage.setItem("email",email)
      localStorage.setItem("pass",pass)
      alert("Signup completed");
      //window.location.href = "..\Coming soon Page\index.html";

  }
  else{
      alert("student id already exist");
      //window.location.href = "index.html";
  }
}

*/


//Password eye//
passShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let passFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  passFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
