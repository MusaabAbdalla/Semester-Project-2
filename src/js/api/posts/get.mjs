import { API_BASE } from "../../utils/variables.mjs";

export async function getPosts() {
  const response = await fetch(API_BASE + "/auction/listings");
  if (response.ok) {
    const posts = await response.json();
    console.log(posts);
    return posts;
  }
  throw new Error("Can not get Posts");
}