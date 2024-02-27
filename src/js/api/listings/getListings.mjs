import { API_BASE, API_LISINGS } from "../../utils/variables.mjs";

export async function getListings() {
  const response = await fetch(API_BASE + API_LISINGS);
  if (response.ok) {
    return (await response.json()).data;
  }
  throw new Error("Can not get Posts");
}
