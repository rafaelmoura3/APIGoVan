import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('endereco')
export default class endereco {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    cep: string;

    @Column()
    logadouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    complemento: string;

    //@Column()
    //cidade:
    
}