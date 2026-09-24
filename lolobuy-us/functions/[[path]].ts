import app from "../dist/server/index.js";

type PagesContext = {
  request: Request;
  env: Record<string, unknown>;
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
};

export const onRequest = (context: PagesContext) =>
  app.fetch(context.request, context.env, {
    waitUntil: context.waitUntil.bind(context),
    passThroughOnException: context.passThroughOnException.bind(context),
  });
