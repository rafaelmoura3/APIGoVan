import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoLogradouro')
export default class tipoLogradouro {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

}