import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('donaciones') 
export class Donacione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProducto: string; 

  @Column()
  descripcion: string;

  @Column('int')
  cantidad: number;

  @Column('datetime')
  fecha: Date;

  @Column()
  estado: string; 

  constructor(partial: Partial<Donacione>) {
    Object.assign(this, partial);
    if (this.fecha instanceof Date) {
      this.fecha = new Date(this.fecha);
    }
  }
}
