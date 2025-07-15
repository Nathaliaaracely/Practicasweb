import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateDonacioneDto {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;
    
    @Column()
    @IsString()
    nombre: string;
    
    @Column()
    @IsNumber()
    cantidad: number;
    
    @Column()
    @IsDate()
    fecha: Date;
    
    @Column()
    @IsString()
    descripcion: string;
}
