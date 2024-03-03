import { load } from "../../storage/load.mjs";
import { API_BASE, API_KEY, API_PROFILES } from "../../utils/variables.mjs";
const query = "?_listings=true&_wins=true";
export async function getProfile(profileName) {
  try {
    const option = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    };
    const response = await fetch(
      API_BASE + API_PROFILES + "/" + profileName + query,
      option,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
