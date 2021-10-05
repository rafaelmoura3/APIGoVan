import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import contrato from "./contrato";
import tipoPoliticaCancelamento from "./tipoPoliticaCancelamento";
@Entity('tipoContrato')
export default class tipoContrato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

    @OneToOne(type => tipoPoliticaCancelamento, tipoContrato => tipoContrato )
    @JoinColumn()
    tipoPoliticaCancelamento: tipoPoliticaCancelamento;
    
    @OneToOne(() => contrato, tipoContrato => tipoContrato)
    contrato: contrato;

}