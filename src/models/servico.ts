import { Entity, Column,PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from "typeorm";
import motorista from "./motorista";
import veiculo from "./veiculo";

@Entity('servico')
export default class servico {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @OneToMany(() => motorista, servico => servico)
    motorista:motorista[];

    //@Column()
    //passageiro:

    //@Column()
    //trajeto:

    //Relacionamento de veiculo_fk com servico
    @OneToOne(()=> veiculo, servico=> servico)
    @JoinColumn()
    veiculo: veiculo;

}