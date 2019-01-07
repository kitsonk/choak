import { Application, color, Router } from "./deps.ts";
import { handleError } from "./handleError.ts";
import { logger } from "./logger.ts";
import { responseTime } from "./responseTime.ts";
import { staticContent } from "./staticContent.ts";

import { getRooms, getRoomById } from "./state/room/mod.ts";
import { getMessages, getMessageById } from "./state/room/message/mod.ts";

const ADDR = "127.0.0.1:8000";

const app = new Application();
const router = new Router();

router.get<{ room_id: string; message_id: string }>(
  "/room/:room_id/message/:message_id",
  getMessageById
);
router.get<{ room_id: string }>("/room/:room_id/message", getMessages);
router.get("/room/:room_id", getRoomById);
router.get("/room", getRooms);

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
