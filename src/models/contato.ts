import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('contato')
export default class contato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

}