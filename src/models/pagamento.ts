import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import fatura from "./fatura";

@Entity('pagamento')
export default class pagamento {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    forma_de_pagamento: string;

    @Column()
    valor_pago: number;

    //Relacionamento de fatura com pagamento_fk
    @OneToOne(() => fatura, pagamento=> pagamento)
    fatura:fatura;
}