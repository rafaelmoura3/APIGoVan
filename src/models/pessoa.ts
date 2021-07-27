import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('pessoa')
export default class pessoa {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    nome: string;

    @Column()
    apelido: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    dataNascimento: string;

    //@Column()
    //contato:

    @Column()
    observacao: string;

    @Column()
    referencia: string;
    
}