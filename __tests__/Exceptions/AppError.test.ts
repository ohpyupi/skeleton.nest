import { AppError } from '../../src/Exceptions/AppError';

describe('AppError', () => {
  test('AppError should contain message and status', () => {
    const error = new AppError('message');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('status');
    expect(error).toBeInstanceOf(AppError);
    expect(error).toBeInstanceOf(Error);
  });
});
