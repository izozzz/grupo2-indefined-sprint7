let email = document.querySelector("div.email label input");
let password = document.querySelector("div.password label input");

let errorEmail = document.querySelector("#errorEmail");
let errorPassword = document.querySelector("#errorPassword");

email.addEventListener("blur", emailValidator);
password.addEventListener("blur", passwordValidator);

function emailValidator(){
    if(email.value == ""){
        let error = "Ingresa un email";
        errorEmail.innerHTML = error;
        errores.email = error;
    } 
    else if(email.value != "" && (!email.value.includes("@") || !email.value.includes("."))){
        let error = "Debe ingresar un email valido";
        errorEmail.innerHTML = error;
        errores.email = error;
    } 
    else{
        errorEmail.innerHTML = "";
        errores.email = "";
    };
};

function passwordValidator(){
    if(password.value == ""){
        let error = "Ingresa una contraseña";
        errorPassword.innerHTML = error;
        errores.password = error;
    }
    else if(password.value.length < 8){
        let error = "La contraseña deberá tener al menos 8 caracteres";
        errorPassword.innerHTML = error;
        errores.password = error;
    }
    else{
        errorPassword.innerHTML = "";
        errores.password = "";
    };
};