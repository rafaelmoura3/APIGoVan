import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('trajeto')
export default class trajeto {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

    @Column()
    pontoInicio: string;

    @Column()
    pontoDestino: string;

    @Column()
    horarioChegada: string;

    @Column()
    valorCobrado: number;

}