import { CatModule } from '../../src/Cat/CatModule';

describe('CatModule', () => {
  test('module', async () => {
    const catModule = new CatModule();
    expect(catModule).toBeInstanceOf(CatModule);
  });
});
