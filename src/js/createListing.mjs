import { createListing } from "./api/listings/createListings.mjs"
const createListingForm = document.querySelector("#create-listing-form")
const tagsInput = document.querySelector("#tags")
const clearTags = document.querySelector("#clear-tags")
const tagsView = document.querySelector("#tags-view")



let tagsArray = []

tagsInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        if(tagsInput.value){
        // console.log(tagsInput.value)
        tagsArray.push(tagsInput.value)
        tagsView.value += `#${tagsInput.value} `
        tagsInput.value=""
    }
}
})
//this button will empty the tags array and clear the value of tags text input
clearTags.addEventListener("click",()=>{
    tagsArray =[]
    tagsInput.value=""
    tagsView.value =""
})

//This will prevent the form from submitting when Enter key is pressed 
createListingForm.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault()
    }
})



createListingForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title = createListingForm.title.value
    const imageUrl = createListingForm.imageUrl.value
    const body = createListingForm.body.value
    const endsAt = createListingForm.endsAt.value
    const tags = tagsArray

    // console.log(title)
    // console.log(imageUrl)
    // console.log(body)
    // console.log(endsAt)
    const listing = {
  "title":title ,
  "description": body,
  "endsAt": endsAt,
  "tags":tags,
  "media": [
    {
      "url": imageUrl,
      "alt": ""
    }
  ]
}
createListing(listing)

})
