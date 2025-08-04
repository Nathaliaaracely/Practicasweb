import { Test, TestingModule } from '@nestjs/testing';
import { RegistroActividadesGateway } from './registro_actividades.gateway';
import { RegistroActividadesService } from './registro_actividades.service';

describe('RegistroActividadesGateway', () => {
  let gateway: RegistroActividadesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroActividadesGateway, RegistroActividadesService],
    }).compile();

    gateway = module.get<RegistroActividadesGateway>(RegistroActividadesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
