import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('receptores')
export class Receptore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    telefono: string;
}
