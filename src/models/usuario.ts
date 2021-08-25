import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export default class usuario {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    email: string;

    @Column()
    senhaHash:String;

    @Column()
    contato: String;

    @Column()
    urlFoto: string;

    @Column()
    usuarioTipo: number;

}