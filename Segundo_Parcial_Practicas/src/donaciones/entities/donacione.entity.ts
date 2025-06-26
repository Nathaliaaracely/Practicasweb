import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductosDonaciones } from 'src/productos-donaciones/entities/productos-donacione.entity';

@Entity()
export class Donaciones {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;
    
    @Column()
    descripcion: string;
    
    @Column()
    fechaCreacion: Date;
    
    @Column()
    fechaLimite: Date;
    
    @Column()
    estado: string;

    @Column({ nullable: true })
    cantidad?: number;

    @Column({ nullable: true })
    valor?: number;
    
    
    @OneToMany(() => ProductosDonaciones, productosDonacion => productosDonacion.donacion)
    productosDonaciones: ProductosDonaciones[];
}
