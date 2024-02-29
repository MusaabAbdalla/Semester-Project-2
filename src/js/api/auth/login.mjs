import { save } from "../../storage/save.mjs";
import { API_AUTH, API_BASE, API_LOGIN } from "../../utils/variables.mjs";

export async function userLogin(userEmail, userPassword) {
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
  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    console.log(accessToken);
    console.log(profile);
    window.location.replace("../../../profile")
    return profile;
  }
  
  throw new Error("Could not login account");
}
