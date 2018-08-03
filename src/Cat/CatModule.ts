import { Module } from '@nestjs/common';
import { ConfigModule } from '../Config/ConfigModule';
import { CatController } from './CatController';
import { CatService } from './CatService';

const catServiceProvider = {
  provide: 'ICatRepo',
  useClass: CatService,
};

@Module({
  controllers: [CatController],
  providers: [catServiceProvider],
  imports: [ConfigModule],
})
export class CatModule {}
