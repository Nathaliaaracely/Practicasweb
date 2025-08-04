import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosGateway } from './usuarios.gateway';
import { UsuariosService } from './usuarios.service';

describe('UsuariosGateway', () => {
  let gateway: UsuariosGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosGateway, UsuariosService],
    }).compile();

    gateway = module.get<UsuariosGateway>(UsuariosGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
