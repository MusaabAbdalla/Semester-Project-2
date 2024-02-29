export function renderSellerInfo(listing) {
  const sellerInfo = document.querySelector("#seller-info");
  sellerInfo.innerHTML = "";
  sellerInfo.innerHTML = `
            <p class="fs-1">Seller</p>
            <div class="d-flex flex-row align-items-center gap-1">
                <img src="${listing.seller.avatar.url}" class=" border rounded-circle" alt="${listing.seller.avatar.alt}" width="128">
                <div>
                    <p class="fs-5">Name: ${listing.seller.name}</p>
                    <p class="fs-5">Email: ${listing.seller.email}</p>
                </div>
            </div>
`;
}
