import { getListings } from "./api/listings/getListings.mjs";

const listingsCardsContainer = document.querySelector("#listings-container");
// console.log(listCardsContainer.innerHTML)

const listings = await getListings();
console.log(listings);

export function renderListings() {
  listingsCardsContainer.innerHTML = [];

  listings.forEach((listing) => {
    listingsCardsContainer.innerHTML += `
                <div class="card col-5 col-xxl-3 ">
                    <img src="${listing.media[0].url}" class="card-img-top" alt="${listing.media[0].alt}">
                    <div class="card-body">
                        <h5 class="card-title">${listing.title}</h5>
                        <p class="card-text"><small class="text-danger">Ends At ${listing.endsAt}</small></p>
                        <a href="./listing/listing.html?id=${listing.id}" data-id="${listing.id}" class="stretched-link"></a>
                    </div>
                </div>
    `;
  });
}

renderListings();
