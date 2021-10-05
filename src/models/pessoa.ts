import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import endereco from "./endereco";
import usuario from "./usuario";

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

    @OneToOne(() => endereco, pessoa => pessoa)
    @JoinColumn()
    endereco:endereco;

    @Column()
    observacao: string;

    @Column()
    referencia: string;

    //Relacionamento de usuario_fk com pessoa
    @OneToOne(() => usuario, pessoa => pessoa)
    @JoinColumn()
    usuario:usuario;
    

    //Relacionamento de contato_fk com pessoa
    //@OneToOne(type => contato, pessoa => pessoa)
    //@JoinColumn()
    //contato:contato;
    
}