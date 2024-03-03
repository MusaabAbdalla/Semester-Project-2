import { save } from "../../storage/save.mjs";
import { API_AUTH, API_BASE, API_LOGIN } from "../../utils/variables.mjs";

export async function userLogin(userEmail, userPassword) {
  const dangerAlert = document.querySelector("#danger-alert")
  try {
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
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, option);
  const  json= (await response.json()).data   
  const { accessToken, ...profile } = json;
  save("token", accessToken);
  save("profile", profile);
  window.location.replace("./profile/index.html");
    
  } 
  catch (error) {
    dangerAlert.classList.toggle("d-none")
    dangerAlert.innerHTML= `Invalid Username or Password` 
    setTimeout(()=>{
        dangerAlert.classList.toggle("d-none")
    },5500)     
    
    console.log(error)
  }

  }


