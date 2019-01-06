import { color, Middleware } from "./deps.ts";

export const logger: Middleware = async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${color.green(context.request.method)} ${color.blue(
      context.request.url
    )} - ${color.bold(String(rt))}`
  );
};
