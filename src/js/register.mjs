import {
  API_BASE,
  API_AUTH,
  API_KEY_URL,
} from "./utils/variables.mjs";
import { load } from "./storage/load.mjs";
import { userLogin } from "./api/auth/login.mjs";
import { userRegister } from "./api/auth/register.mjs";
const signUpSelector = document.querySelector("#singup-button");
const loginSelector = document.querySelector("#login-button");

const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const loginSubmitButton = document.getElementById("submit");
const signupSubmitButton = document.getElementById("signup-submit");
let userName;
let userEmail;
let userPassword;

//This part is for selecting Register-form
signUpSelector.addEventListener("click", () => {
  signUpSelector.classList.remove("btn-secondary");
  signUpSelector.classList.add("btn-primary-light");
  console.log(signUpSelector);
  loginSelector.classList.remove("btn-primary-light");
  loginSelector.classList.add("btn-secondary");
  loginForm.classList.add("d-none");
  signupForm.classList.remove("d-none");
  signupForm.classList.add("d-block");
  console.log(signupForm);
});
// this part is for selection login-form
loginSelector.addEventListener("click", () => {
  signUpSelector.classList.remove("btn-primary-light");
  signUpSelector.classList.add("btn-secondary");
  loginSelector.classList.add("btn-primary-light");
  signupForm.classList.add("d-none");
  signupForm.classList.remove("d-block");
  loginForm.classList.add("d-block");
  loginForm.classList.remove("d-none");
});

//when clicking login-button, i need to find out more about form validation in js
loginSubmitButton.onclick = () => {
  event.preventDefault();
  userEmail = loginForm.email.value;
  userPassword = loginForm.password.value;
  console.log(userEmail);
  console.log(userPassword);
  userLogin(userEmail, userPassword);
};

//when clicking signup button, i will add more functionality to check the
//input data in the future
signupSubmitButton.addEventListener("click", () => {
  event.preventDefault();
  userName = signupForm.username.value;
  userEmail = signupForm.email.value;
  userPassword = signupForm.password.value;
  userRegister(userName, userEmail, userPassword);
});


export async function getAPIKey() {
  const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify({
      name: "MY API KEY",
    }),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error("Could not register for API key!!!!");
  }
}

// getAPIKey()



// ,{
//         headers:{
//         Authorization: `Bearer ${load("token")}`,
//         "X-Noroff-API-Key": API_KEY
//         }
//     }
