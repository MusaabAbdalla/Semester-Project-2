import { API_BASE, API_LISINGS } from "../../utils/variables.mjs";

export async function getListings(search="") {
  try {
    const response = await fetch(API_BASE + API_LISINGS + search);
    const data = (await response.json()).data
    return data
    

  } 
  catch (error) {
    console.log(error)
    
  }
}





// export async function getListings(search="") {
//   const response = await fetch(API_BASE + API_LISINGS + search);
//   if (response.ok) {
//     return (await response.json()).data;
//   }
//   throw new Error("Can not get Posts");
// }
