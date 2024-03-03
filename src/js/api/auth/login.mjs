import { save } from "../../storage/save.mjs";
import { API_AUTH, API_BASE, API_LOGIN } from "../../utils/variables.mjs";

export async function userLogin(userEmail, userPassword) {
  const dangerAlert = document.querySelector("#danger-alert")
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
  const data = (await response.json()).data
  if (response.ok) {
    const { accessToken, ...profile } = data;
    save("token", accessToken);
    save("profile", profile);
    window.location.replace("../../../profile");
    return profile;
  }
  else{

    console.log(data.errors[0].message)
    dangerAlert.classList.toggle("d-none")
    dangerAlert.innerHTML= data.errors[0].message
    setTimeout(()=>{
        dangerAlert.classList.toggle("d-none")
    },5500)     
    throw new Error("Could not login account");
  }

}
