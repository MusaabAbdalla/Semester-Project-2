import { API_BASE, API_LISINGS } from "../../utils/variables.mjs";


export async function getListing(id){
    const response = await fetch(API_BASE +API_LISINGS + "/" + id);
    if(response.ok){
        return (await response.json()).data
    }
    throw new Error("Something wrong happend")
}