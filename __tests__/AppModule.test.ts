import { AppModule } from '../src/AppModule';

describe('AppModule', () => {
  test('module', () => {
    const appModule = new AppModule();
    expect(appModule).toBeInstanceOf(AppModule);
  });
});
