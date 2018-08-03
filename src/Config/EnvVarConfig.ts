import { Injectable } from '@nestjs/common';
import { IEnvVarConfig } from '../Interfaces/IEnvVarConfig';

@Injectable()
export class DevelopmentVarConfig implements IEnvVarConfig {
  public PORT = process.env.PORT || 5000;
  public ENV = 'development';
}

export class StagingVarConfig extends DevelopmentVarConfig {
  public ENV = 'staging';
}

export class ProductionVarConfig extends DevelopmentVarConfig {
  public ENV = 'production';
}

export const envVarConfigFactory = (env: string): IEnvVarConfig => {
  if (env === 'production') {
    return new ProductionVarConfig();
  }
  if (env === 'staging') {
    return new StagingVarConfig();
  }
  return new DevelopmentVarConfig();
};
