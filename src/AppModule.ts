import { Module } from '@nestjs/common';
import { ConfigModule } from './Config/ConfigModule';
import { CatModule } from './Cat/CatModule';

@Module({
  imports: [ConfigModule, CatModule],
})
export class AppModule {}
