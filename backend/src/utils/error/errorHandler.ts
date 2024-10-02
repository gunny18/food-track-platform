import { AppError } from "./appError";

export class ErrorHandler {
  public async handleError(err: Error) {
    // log
    // send mail if needed, etc.
  }
  public isTrustedError(err: Error) {
    if (err instanceof AppError) {
      return err.isOperational;
    }
    return false;
  }
}
