import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoContato')
export default class ttipoContato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

}