import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import cidade from "./cidade";
import pessoa from "./pessoa";
import tipoLogradouro from "./tipoLogradouro";

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

    //Relacionamento de endereco com cidade_fk
    @OneToOne(() => cidade, endereco => endereco)
    @JoinColumn()
    cidade:cidade;

    //Relacionamento de endereco com tipoLogradouro_fk
    @OneToOne(() => tipoLogradouro, endereco => endereco)
    @JoinColumn()
    tipoLogradouro:tipoLogradouro;

    //Relacionamento de endereco_fk com pessoa
    @OneToOne(() => pessoa, endereco => endereco)
    pessoa:pessoa;
    
}