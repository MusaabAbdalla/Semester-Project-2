import { load } from "../../storage/load.mjs"
import { API_BASE, API_KEY, API_LISINGS } from "../../utils/variables.mjs"

export async function submitBid(amount,id){
    try {
        const successAlert = document.querySelector("#success-alert")
        const dangerAlert = document.querySelector("#danger-alert")
        const option={
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${load("token")}`,
                "X-Noroff-API-Key": API_KEY,

            },
            body: JSON.stringify({
                "amount": amount
            })
        }
        const response = await fetch(API_BASE + API_LISINGS +"/" +id +"/" + "bids", option)
        const data = await response.json()
 
        if(response.ok){
                successAlert.classList.toggle("d-none");
                setTimeout(()=>{
                successAlert.classList.toggle("d-none")
                location.replace(`../listing/listing.html?id=${data.data.id}`)
            },1000)
        }
        else{
            console.log(data.errors[0].message)
            dangerAlert.classList.toggle("d-none")
            dangerAlert.innerHTML= data.errors[0].message
            setTimeout(()=>{
                dangerAlert.classList.toggle("d-none")
            },5500)     


        } 

        
    } catch (error) {
       console.log(error) 
    }
}