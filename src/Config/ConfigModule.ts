import { Module } from '@nestjs/common';
import { envVarConfigFactory } from './EnvVarConfig';

const envVarConfigProvider = {
  provide: 'IEnvVarConfig',
  useValue: envVarConfigFactory(process.env.NODE_ENV),
};

@Module({
  providers: [envVarConfigProvider],
  exports: [envVarConfigProvider],
})
export class ConfigModule {}
