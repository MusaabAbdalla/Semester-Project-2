import { API_BASE, API_AUTH, API_REGISTER, API_LOGIN, API_KEY_URL, API_KEY } from "./utils/variables.mjs";
import {save} from "./storage/save.mjs"
import {load} from "./storage/load.mjs"
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
  userLogin(API_BASE + API_AUTH + API_LOGIN);
};

//when clicking signup button, i will add more functionality to check the
//input data in the future
signupSubmitButton.addEventListener("click", () => {
  event.preventDefault();
  userName = signupForm.username.value;
  userEmail = signupForm.email.value;
  userPassword = signupForm.password.value;
  userRegister(API_BASE + API_AUTH + API_REGISTER);
});

/**
 * this is an authentaction function that will register a new user
 * @param {string} url the url for API register
 */
async function userRegister(url) {
  try {
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    };
    const response = await fetch(url, data);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

/**
 *the is an authentication function that will login a registered user
 * @param {string} url the url for API login
 */
async function userLogin(url) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    };
    const response = await fetch(url, option);
    if(response.ok){
        const {accessToken, ...profile} = (await response.json()).data
        save("token", accessToken)
        save("profile", profile)
        console.log(accessToken)
        console.log(profile)
        return profile

    }
    throw new Error("Could not login account")
 
}

export async function getAPIKey(){
    const response = await fetch(API_BASE + API_AUTH + API_KEY_URL,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${load("token")}`
        },
        body: JSON.stringify({
            name: "MY API KEY"
        })
    })
    if(response.ok){
        const data = await response.json()
        console.log(data)
        return data 
    }
    else{
        throw new Error("Could not register for API key!!!!")
    }
}

// getAPIKey()
export async function getPosts(){
    const response =  await fetch(API_BASE + "/auction/listings")
    if(response.ok){
        const posts = await response.json()
        console.log(posts)
        return posts

    }
    throw new Error("Can not get Posts")
}

getPosts()

// ,{
//         headers:{
//         Authorization: `Bearer ${load("token")}`,
//         "X-Noroff-API-Key": API_KEY
//         }
//     }