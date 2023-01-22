let taskForm= document.getElementById("log");
let signForm=document.getElementById("sign");
let name= document.getElementById("name");
let email= document.getElementById("email");
let password= document.getElementById("password");

let login=[];

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData={
        name:name.value,
        email:email.value,
        password:password.value,
    };
    login.push(formData);
    localStorage.setItem("login",JSON.stringify(login));
});

let dat=JSON.parse(localStorage.getItem("login"));
let nameSign= document.getElementById("nameSign");
let emailSign= document.getElementById("emailSign");
let passwordSign= document.getElementById("passwordSign");

signForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    dat.forEach((element)=>{
        if((element.email==emailSign.value)&&(element.password==passwordSign.value)){
           alert("SignUp successful");
        }
        else{
            alert("Wrong Credentials");
            location.href= "index.html";
        }
    })
})