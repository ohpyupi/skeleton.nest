import { ArgumentsHost } from '@nestjs/common';
import { MockResponse } from '../../__mocks__/MockResponse';
import { AppError } from '../../src/Exceptions/AppError';
import { AppErrorFilter } from '../../src/Filters/AppErrorFilter';

describe('AppErrorFilter', () => {
  const MockCtx = jest.fn(res => ({
    getResponse: jest.fn().mockImplementation(() => res),
    getRequest: jest.fn().mockImplementation(() => ({})),
  }));
  const MockHost = jest.fn<ArgumentsHost>(ctx => ({
    switchToHttp: jest.fn().mockImplementation(() => ctx),
  }));
  const mockRes = new MockResponse();
  const mockCtx = new MockCtx(mockRes);
  const mockHost = new MockHost(mockCtx);
  test('catch', () => {
    const error = new AppError('messa');
    const filter = new AppErrorFilter();
    filter.catch(error, mockHost);
    expect(mockRes.status).toHaveBeenCalled();
    expect(mockCtx.getResponse).toHaveBeenCalled();
    expect(mockCtx.getRequest).toHaveBeenCalled();
    expect(mockHost.switchToHttp).toHaveBeenCalled();
  });
});
