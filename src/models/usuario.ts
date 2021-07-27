import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export default class usuario {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    descricao: string;

    @Column()
    email: string;

    @Column()
    senhaHash:String;

    //@Column()
    //contato:

    @Column()
    urlFoto: string;

    @Column()
    usuarioTipo: number;

}