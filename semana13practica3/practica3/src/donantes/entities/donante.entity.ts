import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Donante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    telefono: string;
}
