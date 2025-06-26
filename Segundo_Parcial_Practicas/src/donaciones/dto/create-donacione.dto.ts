import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { Column } from "typeorm";

export class CreateDonacioneDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    Name?: string;

    @IsString()
    @IsNotEmpty()
    descripcion?: string;

    @IsDate()
    @IsNotEmpty()
    fechaCreacion?: Date;

    @IsDate()
    @IsNotEmpty()
    fechaLimite?: Date;

    @IsString()
    @IsNotEmpty()
    estado?: string;
    

    @IsNumber()
    @IsOptional()
    Cantidad?: number;

    @IsNumber()
    @IsOptional()
    Valor?: number;

    @Column("simple-array", { nullable: true })
    productosDonacioes?: Number[];
}