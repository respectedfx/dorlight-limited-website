import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "un4rjsc4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
  //   token: undefined,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
