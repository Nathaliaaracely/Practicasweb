import { IsNumber, IsOptional, IsString, Min, IsIn} from "class-validator";

export class CreateTranssaccionPagoDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @IsIn(['Pendiente', 'Completado', 'Fallido'])
    Estado?: string;

    @IsNumber()
    @Min(0)
    Monto: number;

    @IsNumber()
    @IsOptional()
    TranssaccionId?: number;



}
