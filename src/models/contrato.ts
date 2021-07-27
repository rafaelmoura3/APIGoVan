import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('contrato')
export default class contrato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    //@Column()
    //tipoContrato: string;

    @Column()
    urlPDF: string;

    //@Column()
    //contratoTipo:

    @Column()
    detalhes: string;

    @Column()
    dataInicio: Date;

    @Column()
    dataFim: Date;

    @Column()
    dataRenovacao: Date;
}