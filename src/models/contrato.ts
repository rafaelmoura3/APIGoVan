import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import tipoContrato from "./tipoContrato";

@Entity('contrato')
export default class contrato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @OneToOne(() => tipoContrato, contrato => contrato)
    @JoinColumn()
    tipoContrato: tipoContrato;

    @Column()
    urlPDF: string;

    @Column()
    detalhes: string;

    @Column()
    dataInicio: Date;

    @Column()
    dataFim: Date;

    @Column()
    dataRenovacao: Date;
}