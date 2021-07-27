import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('mensalidade')
export default class mensalidade {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    valor: string;

    @Column()
    meses: number;

    @Column()
    diaPagamento: string;

    //@Column()
    //pessoa:

    //@Column()
    //servico:

    @Column()
    mes_inicial: number;

    @Column()
    mes_atual: number;

    @Column()
    quitado: boolean;
}