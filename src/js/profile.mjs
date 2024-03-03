import { getProfile } from "./api/profiles/getProfile.mjs";
import { clearStorage } from "./storage/delete.mjs";
import { load } from "./storage/load.mjs";
import { renderProfile } from "./ui/renderProfile.mjs";
const profileLink = document.querySelector("#profile-link")
const profileName = load("profile") ;
console.log(profileName)
if(profileName){
    profileLink.classList.toggle("d-none")
    const profile = await getProfile(profileName.name);
    renderProfile(profile);

    const logoutButton = document.querySelector("#logout-button")
    logoutButton.addEventListener("click",()=>{
        clearStorage()
        window.location.replace("../index.html")
})

}

