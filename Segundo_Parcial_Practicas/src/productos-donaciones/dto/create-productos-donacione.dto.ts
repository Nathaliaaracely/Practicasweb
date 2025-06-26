import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


export class CreateProductosDonacioneDto {
    @IsNumber()
    @IsOptional()
    id?: number;
    
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    nombre: string;
    
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    
    @IsNumber()
    cantidad: number;
    
    @IsNumber()
    precio: number;
    
    @IsOptional()
    @IsString()
    imagen?: string;
    
    
    donacionId?: number;
}
