import Sanityclient from "@sanity/client";
import { config } from "./config";
export default Sanityclient({
  projectId: config.projectId,
  useCdn: true,
  dataset: config.dataset,
});
