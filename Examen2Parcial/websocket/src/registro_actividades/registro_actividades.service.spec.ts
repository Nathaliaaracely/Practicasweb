import { Test, TestingModule } from '@nestjs/testing';
import { RegistroActividadesService } from './registro_actividades.service';

describe('RegistroActividadesService', () => {
  let service: RegistroActividadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroActividadesService],
    }).compile();

    service = module.get<RegistroActividadesService>(RegistroActividadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
