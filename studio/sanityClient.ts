import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "y6dkb123".trim(), // Double-check this is correct
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-19",
});

console.log("Sanity Client Config:", sanityClient);
