import { getProfile } from "./api/profiles/getProfile.mjs";
import { updateAvtar } from "./api/profiles/updateAvatar.mjs";
import { load } from "./storage/load.mjs";
import { API_AUTH, API_BASE, API_KEY, API_PROFILES } from "./utils/variables.mjs";
const updateAvatarForm = document.querySelector("#update-avatar-form")

console.log("Hiiii")
const profileName = load("profile").name;
const profile = await getProfile(profileName);
console.log(profile)

updateAvatarForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const mediaUrl = updateAvatarForm.avatarUrl.value
    const newProfile = {
  "avatar": {
    "url": mediaUrl, 
    "alt":  profile.avatar.alt
  },
  "banner": {
    "url": profile.banner.url,
    "alt": profile.banner.alt
  },
  "bio": profile.bio 
}
    console.log(mediaUrl)
    updateAvtar(newProfile,profileName)


})


