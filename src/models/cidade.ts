import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import endereco from "./endereco";
import estado from "./estado";

@Entity('cidade')
export default class cidade {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

    //Relacionamento de cidade com estado_fk
    @OneToOne(type => estado, cidade => cidade)
    @JoinColumn()
    estado:estado;

    //Relacionamento de cidade_fk com endereco
    @OneToOne(type => endereco, cidade => cidade)
    endereco: endereco;

}