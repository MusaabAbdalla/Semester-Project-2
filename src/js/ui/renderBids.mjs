import {formatDate} from "../utils/formatDate.mjs"
export function renderBids(listing) {
  const bidsContainer = document.querySelector("#listing-history");
  const bids = listing.bids;
  bidsContainer.innerHTML = "";

  for (let i = bids.length - 1; i >= 0; i--) {
    var last;
    if (i === bids.length - 1) {
      last = "bg-warning";
    } else {
      last = "";
    }
    bidsContainer.innerHTML += `
        <div class="border border-primary rounded ${last}  ps-3 mb-3">
                    <p class="fs-4 text-bold">Bid Amount: ${bids[i].amount}</p>
                    <p class="fs-4 text-bold">Bidder Name: ${bids[i].bidder.name}</p>
                    <p class="fs-4 text-bold">Bid date: ${formatDate(bids[i].created)}</p>
                </div>

        `;
  }
}