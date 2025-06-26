import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TranssaccionPago {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    Estado?: string;

    @Column({ type: 'decimal' })
    Monto: number;

    @Column()
    TranssaccionId?: number;
}
