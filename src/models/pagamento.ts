import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('pagamento')
export default class pagamento {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    forma_de_pagamento: string;

    @Column()
    valor_pago: number;

}