import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductosDonaciones {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @Column({ nullable: true })
    imagen?: string;

    @Column({ nullable: true })
    donacionId?: number;
}

