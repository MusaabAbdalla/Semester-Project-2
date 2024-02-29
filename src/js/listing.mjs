import { getListing } from "./api/listings/getListing.mjs";
import { renderBids } from "./ui/renderBids.mjs";
import { renderSellerInfo } from "./ui/renderSellerInfo.mjs";
import { renderListingDetails } from "./ui/renderlistingDetails.mjs";
const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const query = "?_seller=true&_bids=true"
const listing = await getListing(id + query)

renderSellerInfo(listing)
renderListingDetails(listing)
renderBids(listing)