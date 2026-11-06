import app from "../dist/server/index.js";

type PagesContext = {
  request: Request;
  env: Record<string, unknown>;
  next(): Promise<Response>;
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
};

export const onRequest = (context: PagesContext) => {
  // Vite's generated CSS and JavaScript are static Pages assets, not app routes.
  if (new URL(context.request.url).pathname.startsWith("/assets/")) {
    return context.next();
  }

  return app.fetch(context.request, context.env, {
    waitUntil: context.waitUntil.bind(context),
    passThroughOnException: context.passThroughOnException.bind(context),
  });
};
