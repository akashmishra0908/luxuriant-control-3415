function whyAk() {
    document.querySelector(".why").style.display = "grid";
    document.querySelector(".container").style.display = "none";

}
function features() {
    document.querySelector(".why").style.display = "grid";
    document.querySelector(".container").style.display = "none";

}
function resources() {
    document.querySelector(".why").style.display = "grid";
    document.querySelector(".container").style.display = "none";

}



let mailbtn=document.querySelector("#mailBtn");
mailbtn.addEventListener('click',function(){
    let mailinput=document.querySelector("#mailINput").value;
    
    let storedusername=localStorage.getItem('usermail');
    if(mailinput!=storedusername){
         alert("user not registered");
         window.location.assign("./login.html");
    }
    else{
        window.location.assign('./pricing.html');
    }
})