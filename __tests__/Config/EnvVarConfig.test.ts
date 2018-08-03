import { envVarConfigFactory } from '../../src/Config/EnvVarConfig';

describe('EnvVarConfig', () => {
  test('production', () => {
    const envVar = envVarConfigFactory('production');
    expect(envVar).toHaveProperty('ENV', 'production');
  });
  test('staging', () => {
    const envVar = envVarConfigFactory('staging');
    expect(envVar).toHaveProperty('ENV', 'staging');
  });
  test('development', () => {
    const envVar = envVarConfigFactory('development');
    expect(envVar).toHaveProperty('ENV', 'development');
  });
});
