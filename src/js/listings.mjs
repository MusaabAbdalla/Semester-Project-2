import { getListings } from "./api/listings/getListings.mjs";
import { load } from "./storage/load.mjs";
import { renderListings } from "./ui/renderListings.mjs";
const searchForm = document.querySelector("#search-form")
const successAlert = document.querySelector("#success-alert")
const dangerAlert = document.querySelector("#danger-alert")
const profileLink = document.querySelector("#profile-link")
const profileName = load("profile") ;
const listings = await getListings();
if(profileName){
    profileLink.classList.toggle("d-none")
}


renderListings(listings);

searchForm.addEventListener("submit",async(e)=>{
  e.preventDefault()
  const searchValue =  searchForm.search.value
  const search = `/search?q=${searchValue}` 
  const newListings = await getListings(search)
  console.log(newListings)

        if(newListings.length > 0){
                renderListings(newListings)
                successAlert.classList.toggle("d-none");
                successAlert.innerHTML= `${newListings.length} Bids found` 
                setTimeout(()=>{
                successAlert.classList.toggle("d-none")
            },1000)
        }
        else{
            dangerAlert.classList.toggle("d-none")
            dangerAlert.innerHTML= `No search results for ${searchValue}` 
            setTimeout(()=>{
                dangerAlert.classList.toggle("d-none")
            },5500)     


        } 

} )


