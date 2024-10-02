export class AppError extends Error {
  constructor(
    public description: string,
    public httpCode?: number,
    public isOperational?: boolean
  ) {
    super(description);
  }
}
