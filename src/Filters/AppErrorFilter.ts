import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AppError } from '../Exceptions/AppError';

@Catch(AppError)
export class AppErrorFilter implements ExceptionFilter {
  public catch(error: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const { message, status, data } = error;

    response.status(status).json({
      message,
      data,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
