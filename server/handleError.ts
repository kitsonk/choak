import { color, HttpError, Middleware, Status } from "./deps.ts";

export const handleError: Middleware = async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!DOCTYPE html>
          <html>
              <body>
              <h1>${e.status} - ${e.message}</h1>
              </body>
          </html>`;
      } else {
        context.response.body = `<!DOCTYPE html>
          <html>
            <body>
              <h1>${e.status} - ${Status[e.status]}</h1>
            </body>
          </html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!DOCTYPE html>
        <html>
            <body>
            <h1>500 - Internal Server Error</h1>
            </body>
        </html>`;
      console.log("Unhandled Error:", color.red.bold(e.message));
      console.log(e.stack);
    }
  }
};
