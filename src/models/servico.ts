import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('servico')
export default class servico {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    //@Column()
    //motorista: 

    //@Column()
    //passageiro:

    //@Column()
    //trajeto:

}