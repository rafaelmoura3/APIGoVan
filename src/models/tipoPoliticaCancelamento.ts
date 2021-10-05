import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import tipoContrato from "./tipoContrato";

@Entity('tipoPoliticaCancelamento')
export default class tipoPoliticaCancelamento {
    
    @PrimaryGeneratedColumn('increment')
    uuid: number;

    @Column()
    descricao: string;

    @OneToOne(() => tipoContrato, tipoPoliticaCancelamento => tipoPoliticaCancelamento )
    tipoContrato: tipoContrato;
}