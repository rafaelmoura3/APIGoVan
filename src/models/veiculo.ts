import { Entity, Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import servico from "./servico";

@Entity('veiculo')
export default class veiculo {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    placa: string;

    @Column()
    urlFoto: string;
    

     //Relacionamento de servico com veiculo_fk
     @OneToOne(()=> servico, veiculo=> veiculo)
     servico: servico;
}