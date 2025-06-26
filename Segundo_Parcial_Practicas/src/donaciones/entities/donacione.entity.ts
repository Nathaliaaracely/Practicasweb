import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    
    
    // Relación con ProductosDonaciones
    @Column("simple-array", { nullable: true })
    productosDonaciones?: number[];
}
