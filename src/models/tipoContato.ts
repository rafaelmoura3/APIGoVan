import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import contato from "./contato";

@Entity('tipoContato')
export default class tipoContato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

    //Relacionamento de contato com tipoContato
    @OneToOne(type => contato, tipoContato => tipoContato) 
    contato:contato; 
}