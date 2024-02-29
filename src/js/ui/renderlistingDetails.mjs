import { formatDate } from "../utils/formatDate.mjs"

export function renderListingDetails(listing){
const listingDetailsContainer = document.querySelector("#listing-detail")
    listingDetailsContainer.innerHTML = ""
    listingDetailsContainer.innerHTML = `
        <div class="container mt-5" id="listing-detail">
            <div class="row gap-5">
                <div class="col-12 col-md-8 ">
                    <img src="${listing.media[0].url}" class="img-fluid border border-primary rounded"
                        alt="${listing.media[0].alt}">
                </div>
                <div class="col-12 col-md-3">
                    <p class="fs-2">${listing.title}</p>
                    <p calss="fs-4 fw-bold">Description:</p>
                    <p clas="fs5">${listing.description}</p>
                    <p class="fs-6">Created: ${formatDate(listing.created)}</p>
                    <p class="fs-6">Updated: ${formatDate(listing.updated)}</p>
                    <p class="fs-6 text-danger">Ends At: ${formatDate(listing.endsAt)}</p>
                </div>
            </div>
        </div>

    `
}