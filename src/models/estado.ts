import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import cidade from "./cidade";

@Entity('estado')
export default class estado {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    uf: string;
    
    //Relacionamento de estado com cidade
    @OneToOne(type => cidade, estado => estado)
    cidade:cidade;
}