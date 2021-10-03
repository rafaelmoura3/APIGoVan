import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import endereco from "./endereco";

@Entity('tipoLogradouro')
export default class tipoLogradouro {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

    //Relacionamento de tipoLogradouro_fk com endereco
    @OneToOne(type => endereco, tipoLogradouro => tipoLogradouro)
    endereco:endereco;
    
}