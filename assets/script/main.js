if (window.outerWidth < 394) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    linkElement.href = "./assets/style/mobile.css";
    document.head.appendChild(linkElement);
    document.getElementById('formMobile').classList.add("active")
    document.getElementById('form').parentNode.removeChild(document.getElementById('form'))
}else{
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    linkElement.href = "./assets/style/master.css";
    document.head.appendChild(linkElement);
    document.getElementById('form').classList.add("active")
    document.getElementById('formMobile').parentNode.removeChild(document.getElementById('formMobile'))
}


document.getElementById("subscribe").addEventListener('click', ()=>{
    if(document.getElementsByClassName("invalidemail")[0])
    {
        document.getElementById('email').classList.remove("invalidemail");
        document.getElementById('email_invalid').classList.remove("show")
    }
    if(document.getElementById('email').value !==""){
        if(validateEmail()){
            /*Form Code */
            if(document.getElementById("form")){
                document.getElementById("form").classList.remove('active');
            }else{
                document.getElementById("formMobile").classList.remove('active');
            }
            document.getElementById("success").classList.add('active')
            document.getElementById('emailText').innerText = document.getElementById('email').value;
        }else{
            document.getElementById('email').classList.add("invalidemail");
            document.getElementById('email_invalid').classList.add("show")

        }
    }
})
document.getElementById('email').addEventListener('keydown',(e)=>{
    if(e.target.value !== ""){
        document.getElementById("subscribe").classList.add('btn-activate')
    }
})
function validateEmail(){
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        // Email is valid
        return true;
    } else {
        // Email is invalid
        return false;
    }
}
document.getElementById('dismiss').addEventListener('click', ()=>{
    document.getElementById("success").classList.remove('active')
})