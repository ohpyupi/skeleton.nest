export const MockResponse = jest.fn(() => ({
  json: jest.fn().mockImplementation(json => json),
  status: jest.fn().mockImplementation(status => ({
    json: jest.fn().mockImplementation(json => json),
  })),
}));
