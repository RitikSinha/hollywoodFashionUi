import client from "@sanity/client";
import { config } from "./config";
export default client({
  projectId: config.projectId,
  useCdn: true,
  dataset: config.dataset,
});
