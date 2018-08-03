import { MockResponse } from '../../__mocks__/MockResponse';
import { CatController } from '../../src/Cat/CatController';
import { CreateCatDto } from '../../src/Cat/Dto/CreateCatDto';
import { ICatRepo } from '../../src/Interfaces/ICatRepo';
import { Cat } from '../../src/Models/Cat';

describe('CatController', () => {
  let catController: CatController;
  let catRepo: ICatRepo;
  let res: any;

  const MockCatService = jest.fn<ICatRepo>(() => ({
    getAll: jest.fn().mockImplementation(async () => [new Cat(), new Cat()]),
    getById: jest.fn().mockImplementation(async id => new Cat()),
    create: jest.fn().mockImplementation(async (cat: Cat) => cat),
  }));

  beforeEach(() => {
    res = new MockResponse();
    catRepo = new MockCatService();
    catController = new CatController(catRepo);
  });

  test('create', async () => {
    const dto = new CreateCatDto();
    dto.cat = new Cat();
    const result: any = await catController.create(dto, res);
    expect(catRepo.create).toHaveBeenCalled();
    expect(result).toHaveProperty('cat');
    expect(result.cat).toBeInstanceOf(Cat);
  });

  test('getAll', async () => {
    const result: any = await catController.getAll(res);
    expect(catRepo.getAll).toHaveBeenCalled();
    expect(result).toHaveProperty('cats');
    expect(result.cats.length).toBe(2);
  });

  test('getById', async () => {
    const result: any = await catController.getById(1, res);
    expect(catRepo.getById).toHaveBeenCalled();
    expect(result).toHaveProperty('cat');
    expect(result.cat).toBeInstanceOf(Cat);
  });
});
