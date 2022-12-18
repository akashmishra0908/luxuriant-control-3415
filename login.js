let signupbtn=document.querySelector('#SU');
let loginbtn=document.querySelector("#LI");
let login=document.querySelector("#logIn");
let signup=document.querySelector("#signIn");
loginbtn.addEventListener('click',function(){
    signup.style.display="none"
    login.style.display="block"
    
})
signupbtn.addEventListener('click',function(){
    signup.style.display="block"
    login.style.display="none"
    
})
signup.addEventListener('submit',function(event){
event.preventDefault();

let userName = signup.name.value;
let usermail = signup.mail.value;
let password = signup.password.value;
if(password!=signup.Repassword.value){
    alert("Password do not match !");

}
else{
    localStorage.setItem('username',userName);
    localStorage.setItem('usermail',usermail); 
    localStorage.setItem('password',password);
    alert("signup sucessfully");
    signup.reset();
}
});
login.addEventListener('submit',function(Event){
    Event.preventDefault();
    let user=login.enteredmail.value;
    let userpassword=login.enteredpassword.value;
    let storedusername=localStorage.getItem('usermail');
    let storeduserpassword=localStorage.getItem('password');
 
   if(user!=storedusername){
    alert("User not found/registered")
   }
   else{
    if(userpassword!=storeduserpassword){
        alert("password do not match");
    }
    else{
         alert("Login succesfully !...")
         window.location.assign('./index.html');
    }
} 
})