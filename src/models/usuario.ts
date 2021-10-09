import { Entity, Column,PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne} from "typeorm";
import bcrypt from "bcryptjs";
import pessoa from "./pessoa";
@Entity('usuario')
export default class usuario {
    
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    email: string;

    @Column()
    senhaHash: string;

    @Column()
    contato: string;

    @Column()
    urlFoto: string;

    @Column()
    isMotorista: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    encryptSenha(): void{
        this.senhaHash = bcrypt.hashSync(this.senhaHash, 8);
    }


    @OneToOne(() => pessoa, usuario => usuario)
    pessoa:pessoa;

}