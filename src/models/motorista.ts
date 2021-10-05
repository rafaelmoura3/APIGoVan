import { Entity, Column,PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import servico from "./servico";

@Entity('motorista')
export default class motorista {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    cnh: string;

     //@Column()
    //pessoa:

    @ManyToOne(() => servico, motorista => motorista)
    servico: servico;
}