import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('veiculo')
export default class veiculo {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    placa: string;

    @Column()
    urlFoto: string;
    
}