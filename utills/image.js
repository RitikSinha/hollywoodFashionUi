import client from "./client";
import imageUrlBuilder from "@sanity/image-url";
function urlForThumbnail(source) {
  return imageUrlBuilder(client).image(source).width(300).height(400).url();
}

export { urlForThumbnail };
