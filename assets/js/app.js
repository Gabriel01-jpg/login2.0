const loginToggle = document.querySelector('.login');
const passwordToggle = document.querySelector('.password');
const inputs = document.querySelectorAll('.input')
// Trocar cores dos icons e border-bottom quando o usuário clickar em algo
function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus')
    }
    
}


inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});


// Validando informações dentro do login

function Validar(login, password) {
    if(login == '' && password == ''){
        alert('Preencha os campos!');
        return false
    } else if(login == '') {
        alert("Preencha o campo de login");
        return false
    } else if (password == '') {
        alert("Preencha o campo da senha");
        return false
    }  else {
        return true
    }

}


// Remover H5 de input
const inputToggle = document.querySelectorAll('.toggle');
for (const item of inputToggle){
    item.addEventListener('input', function() {
        if (item == inputToggle[0]){
            empty = loginToggle.value.trim()
            if(empty) {
                item.classList.add('remove')
            } else {
                item.classList.remove('remove')
            }
        } else {
            emptyPassword = passwordToggle.value.trim()
            if(emptyPassword) {
                item.classList.add('remove')
            } else {
                item.classList.remove('remove')
            }
        }
    })
}


// Validando entrada 

let arrayLogin = ['gabriel', 'testando', 'admin']
let arrayPassword = ['gabriel123', 'teste', 'admin'] 

function getValueInput() {
    let login = signIn.login.value;
    let password = signIn.password.value;

    if(Validar(login, password)){
        for(let i = 0; i < arrayLogin.length; i++){
            if(login == arrayLogin[i] & password == arrayPassword[i]){
                window.location.href = "about.html"
                break;
            } else if(i == (arrayLogin.length - 1)){
                alert('Login ou senha incorreto!')
            }
        }
    } else {
        
    }

}