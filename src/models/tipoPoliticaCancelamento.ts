import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoPoliticaCancelamento')
export default class tipoPoliticaCancelamento {
    
    @PrimaryGeneratedColumn('increment')
    uuid: number;

    @Column()
    descricao: string;

}