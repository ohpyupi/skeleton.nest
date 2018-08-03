export class AppError extends Error {
  public name: string;
  public message: string;
  public status?: number;
  public data?: any;
  constructor(message: string, status?: number, data?: any) {
    super();
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, AppError);
    this.name = 'AppError';
    this.status = status || 500;
    this.message = message;
    this.data = data;
  }
}
