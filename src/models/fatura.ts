import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import pagamento from "./pagamento";

@Entity('fatura')
export default class fatura {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    dataCriacao: Date;

    @Column()
    valorTotal: number;

    
    //Relacionamento de pagamento_fk com fatura
    @OneToOne(() => pagamento, fatura=> fatura)
    @JoinColumn()
    pagamento: pagamento;
    
    //@Column()
    //mensalidade:

    @Column()
    formaPagamento: string;

    @Column()
    dataPagamento: string;

    @Column()
    observacao: string;
    
}