import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('fatura')
export default class fatura {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    dataCriacao: Date;

    @Column()
    valorTotal: number;

    //@Column()
    //pagamento:

    //@Column()
    //mensalidade:

    @Column()
    formaPagamento: string;

    @Column()
    dataPagamento: string;

    @Column()
    observacao: string;
    
}