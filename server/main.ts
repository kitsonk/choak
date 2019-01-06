import { Application, color, Router } from "./deps.ts";
import { handleError } from "./handleError.ts";
import { logger } from "./logger.ts";
import { responseTime } from "./responseTime.ts";
import { staticContent } from "./staticContent.ts";

const ADDR = "127.0.0.1:8000";

const app = new Application();
const router = new Router();

router.get("/static", staticContent);
router.get("/", staticContent);

app.use(handleError);
app.use(logger);
app.use(responseTime);
app.use(router.routes());
app.use(router.allowedMethods());

(async function main() {
  console.log(color.bold("Starting on:"), color.yellow(ADDR));
  await app.listen(ADDR);
})();
