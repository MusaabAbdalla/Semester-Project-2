import { API_AUTH, API_BASE, API_REGISTER } from "../../utils/variables.mjs";

export async function userRegister(userName, userEmail, userPassword) {
  const successAlert = document.querySelector("#success-alert")
  const dangerAlert = document.querySelector("#danger-alert")

  try {
    const option = {
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
    const response = await fetch(API_BASE + API_AUTH + API_REGISTER, option);
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(response.ok){
        successAlert.classList.toggle("d-none");
        successAlert.innerHTML= "User has register, You can login"
        setTimeout(()=>{
            successAlert.classList.toggle("d-none")
        },1000)


    }
    else{
    console.log(json.errors[0].message)
    dangerAlert.classList.toggle("d-none")
    dangerAlert.innerHTML= json.errors[0].message
    setTimeout(()=>{
        dangerAlert.classList.toggle("d-none")
    },5500)     
    }
  } catch (error) {

    console.log(error);
  }
}
