import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('estado')
export default class estado {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    uf: string;
    
}