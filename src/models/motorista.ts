import { Entity, Column,PrimaryGeneratedColumn, OneToMany,  } from "typeorm";
import servico from "./servico";

@Entity('motorista')
export default class motorista {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    cnh: string;

     //@Column()
    //pessoa:

    @OneToMany(() => servico, motorista => motorista)
    servico: servico[];

}