import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { AppModule } from './AppModule';
import { AppErrorFilter } from './Filters/AppErrorFilter';

process.on('unhandledRejection', e => {
  console.log('unhandledRejection', e);
});

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const { PORT } = app.get('IEnvVarConfig');
  app.useGlobalFilters(new AppErrorFilter());
  app.use(morgan('combined'));
  app.use(cors());
  await app.listen(PORT);
};

bootstrap();
