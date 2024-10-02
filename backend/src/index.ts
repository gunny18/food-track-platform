import { ErrorHandler } from "./utils/error";

// handle unhandled exception cases gracefully
process.on("uncaughtException", async (err) => {
  const errHandler = new ErrorHandler();
  await errHandler.handleError(err);
  if (!errHandler.isTrustedError(err)) {
    process.exit(1);
  }
});

async function initApp() {}

initApp();
