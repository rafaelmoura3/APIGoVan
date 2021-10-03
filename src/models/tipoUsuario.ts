import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import usuario from "./usuario";

@Entity('tipoUsuario')
export default class tipoUsuario {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

    //Relacionamento de tipoUsuario com usuario
    @OneToOne(type => usuario,  tipoUsuario => tipoUsuario)
    usuario: usuario;
}