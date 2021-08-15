import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
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
    
}