import { API_AUTH, API_BASE, API_REGISTER } from "../../utils/variables.mjs";

export async function userRegister(userName, userEmail, userPassword) {
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
  } catch (error) {
    console.log(error);
  }
}
