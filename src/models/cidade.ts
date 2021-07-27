import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('cidade')
export default class cidade {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

    //@Column()
    //estado:

}