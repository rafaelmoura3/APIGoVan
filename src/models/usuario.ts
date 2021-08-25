import { Entity, Column,PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import bcrypt from "bcryptjs";
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
    usuarioTipo: number;

    @BeforeInsert()
    @BeforeUpdate()
    encryptSenha(){
        this.senhaHash = bcrypt.hashSync(this.senhaHash, 8);
    }

}