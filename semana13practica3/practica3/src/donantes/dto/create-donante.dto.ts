import { IsString } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class CreateDonanteDto {
    @PrimaryGeneratedColumn()
    @IsString()
    id: number; 

    @Column()
    @IsString()
    nombre: string;

    @Column()
    @IsString()
    email: string;

    @Column()
    @IsString()
    telefono: string;
}
