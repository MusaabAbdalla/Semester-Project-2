import { getProfile } from "./api/profiles/getProfile.mjs"
import { load } from "./storage/load.mjs"
import { renderProfile } from "./ui/renderProfile.mjs"
const profileName = load("profile").name
const profile = await getProfile(profileName)

renderProfile(profile)



