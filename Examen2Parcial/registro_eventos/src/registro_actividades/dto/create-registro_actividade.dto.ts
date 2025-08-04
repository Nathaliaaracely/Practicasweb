import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRegistroActividadeDto {
    @IsString()
    @IsNotEmpty()
    usuarioId: string;

    @IsString()
    @IsNotEmpty()
    actividadId: string;
}
