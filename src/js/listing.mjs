import { getListing } from "./api/listings/getListing.mjs";
import { submitBid } from "./api/listings/submitBid.mjs";
import { load } from "./storage/load.mjs";
import { renderBids } from "./ui/renderBids.mjs";
import { renderSellerInfo } from "./ui/renderSellerInfo.mjs";
import { renderListingDetails } from "./ui/renderlistingDetails.mjs";
const bidform = document.querySelector("#bid-form")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const query = "?_seller=true&_bids=true";
const listing = await getListing(id + query);



const profileLink = document.querySelector("#profile-link")
const profileName = load("profile") ;
if(profileName){
    profileLink.classList.toggle("d-none")
}

renderSellerInfo(listing);
renderListingDetails(listing);
renderBids(listing);

bidform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const amount = parseInt(bidform.amount.value)
    submitBid(amount,id)

})

renderBids(listing);