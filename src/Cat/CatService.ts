import { IEnvVarConfig } from '../Interfaces/IEnvVarConfig';
import { Injectable, Inject } from '@nestjs/common';

import { ICatRepo } from '../Interfaces/ICatRepo';
import { Cat } from '../Models/Cat';

@Injectable()
export class CatService implements ICatRepo {
  private cats: Cat[] = [];

  constructor(@Inject('IEnvVarConfig') private readonly envVar: IEnvVarConfig) {}

  public async getAll() {
    return this.cats;
  }

  public async getById(id: number) {
    const cat = this.cats.filter((cat: Cat) => cat.id === id)[0]; 
    return cat;
  }

  public async create(cat: Cat) {
    cat.id = Date.now(); 
    this.cats.push(cat);
    return cat;
  }
}
