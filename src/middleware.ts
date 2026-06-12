import type { MiddlewareHandler } from "astro";
export const onRequest: MiddlewareHandler = (_, next) => next();
