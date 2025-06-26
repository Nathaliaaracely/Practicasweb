import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from "typeorm";
import { Donaciones } from "src/donaciones/entities/donacione.entity";

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

    @ManyToOne(() => Donaciones, donacion => donacion.productosDonaciones)
    @JoinColumn({ name: 'donacionId' })
    donacion: Donaciones;

    @Column({ nullable: true })
    donacionId?: number;
}

