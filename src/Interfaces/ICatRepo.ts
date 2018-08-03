import { Cat } from '../Models/Cat';

export interface ICatRepo {
  getAll(): Promise<Cat[]>;
  getById(id: number): Promise<Cat>;
  create(cat: Cat): Promise<Cat>;
}
