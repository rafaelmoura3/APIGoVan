import { type } from "os";
import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import tipoContato from "./tipoContato";
import usuario from "./usuario";

@Entity('contato')
export default class contato {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    valor: string;
    
    //Relacionamento de TipoContato_fk com Contato
    @OneToOne(type => contato, tipoContato => tipoContato)
    @JoinColumn()
    tipoContato: tipoContato;

    //Relacionamento de contato_fk com pessoa

    //Relacionamento de contato_fk com usuario
    @OneToOne(type => usuario, contato => contato)
    usuario: usuario;

}