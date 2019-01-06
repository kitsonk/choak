import * as deno from "deno";
import { Middleware, send } from "./deps.ts";

export const staticContent: Middleware = async context => {
  await send(context, context.request.path, {
    root: `${deno.cwd()}/client/build`,
    index: "index.html"
  });
};
