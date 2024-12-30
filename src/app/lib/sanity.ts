import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: '2023-12-01',
    dataset: 'production',
    projectId: 'ontsev4z',
    useCdn: false,
});

const builder = imageUrlBuilder(client);
 
export function urlFor(source: any) {
    return builder.image(source);
  }