import { load } from "../../storage/load.mjs"
import { API_BASE, API_KEY, API_PROFILES } from "../../utils/variables.mjs"

export async function updateAvtar(profile,profileName){
    try {
        const successAlert = document.querySelector("#success-alert")
        const dangerAlert = document.querySelector("#danger-alert")
        const option ={
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${load("token")}`,
                "X-Noroff-API-Key": API_KEY,

            },
            body: JSON.stringify(profile)
        }
        const response = await fetch(API_BASE + API_PROFILES +"/" + profileName, option)
        const  json = await response.json()
        console.log(response)
        console.log(json)
         if(response.ok){
            successAlert.classList.toggle("d-none");
            setTimeout(()=>{
            successAlert.classList.toggle("d-none")
            location.replace(`../profile/index.html`)
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
       console.log(error) 
    }

}