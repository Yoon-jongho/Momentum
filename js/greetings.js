const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName";

const paintGreetings = (userName) => {
    greeting.innerText = `Hello! ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


const onLoginSubmit = (event) => {
    event.preventDefault();   
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USER_NAME_KEY, userName);
    paintGreetings(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USER_NAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}

