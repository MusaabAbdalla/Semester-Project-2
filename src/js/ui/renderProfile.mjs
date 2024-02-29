export function renderProfile(profile) {
  const profileContainer = document.querySelector("#profile-info");
  profileContainer.innerHTML = "";
  profileContainer.innerHTML = `

            <div class="container d-flex flex-row align-items-center gap-3 mb-3 ">
                <img src="${profile.avatar.url}" class="rounded-circle" alt="${profile.avatar.url}" width="200">
                <div>
                    <p class="fs-5">Name: ${profile.name}</p>
                    <p class="fs-5">Email: ${profile.email}</p>
                    <button class="btn btn-danger">Logout</button>
                </div>
            </div>
            <div class="container" style="width:50vw; ">
                <div class="container bg-light border border-primary rounded p-4 ">
                    <div class="d-flex justify-content-start  ">
                        <p class="fs-4 fw-bold" style="width: 14ch;">Name</p>
                        <p class="fs-4 fw-light">${profile.name}</p>
                    </div>
                    <div class="d-flex justify-content-start  ">
                        <p class="fs-4 fw-bold" style="width: 14ch;">Email</p>
                        <p class="fs-4 fw-light">${profile.email}</p>
                    </div>
                    <div class="d-flex justify-content-start ">
                        <p class="fs-4 fw-bold" style="width: 14ch;">Total Credits</p>
                        <p class="fs-4 fw-light">${profile.credits}</p>
                    </div>
                    <div class="d-flex justify-content-start  ">
                        <p class="fs-4 fw-bold" style="width: 14ch;">Listings Counts</p>
                        <p class="fs-4 fw-light">${profile._count.listings}</p>
                    </div>
                    <div class="d-flex justify-content-start">
                        <p class="fs-4 fw-bold" style="width: 14ch;">Wins</p>
                        <p class="fs-4 fw-light">${profile._count.wins}</p>
                    </div>
                </div>
                <div class="mt-2 d-flex justify-content-between">
                    <a href="#">
                        <button class="btn btn-primary">Update Avatar</button>
                    </a>
                    <a href="../create/create-listing.html">
                        <button  class="btn btn-primary">Create Listing</button>
                    </a>
                </div>
            </div>
   `;
}
