import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoUsuario')
export default class tipoUsuario {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

}