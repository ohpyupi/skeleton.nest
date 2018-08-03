import { CatService } from '../../src/Cat/CatService';
import { ICatRepo } from '../../src/Interfaces/ICatRepo';
import { IEnvVarConfig } from '../../src/Interfaces/IEnvVarConfig';
import { Cat } from '../../src/Models/Cat';

describe('CatService', () => {
  let catService: ICatRepo;
  let envVar: IEnvVarConfig;
  let catId: number;

  const MockEnvVar = jest.fn<IEnvVarConfig>(() => ({}));
  envVar = new MockEnvVar();
  catService = new CatService(envVar);

  test('create should create a new Cat data and return the data', async () => {
    const cat = new Cat();
    cat.name = 'kitty';
    const updated = await catService.create(cat);
    catId = updated.id;
    expect(updated).toHaveProperty('id');
    expect(updated).toHaveProperty('name', 'kitty');
  });

  test('getAll should return all cat data', async () => {
    const cats = await catService.getAll();
    expect(cats.length).toBe(1);
  });

  test('getById should return the data corresponding to the id', async () => {
    const cat = await catService.getById(catId);
    expect(cat).toHaveProperty('name', 'kitty');
  });
});
