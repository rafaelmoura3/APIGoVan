import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('motorista')
export default class motorista {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    cnh: number;

}