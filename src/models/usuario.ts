import { Entity, Column,PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn} from "typeorm";
import bcrypt from "bcryptjs";
import tipoUsuario from "./tipoUsuario";
import { type } from "os";
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
    usuarioTipo: number;

    @BeforeInsert()
    @BeforeUpdate()
    encryptSenha(){
        this.senhaHash = bcrypt.hashSync(this.senhaHash, 8);
    }

    //Relacionamento de tipousuario_fk com usuario
    @OneToOne(type => tipoUsuario, usuario=> usuario)
    @JoinColumn()
    tipoUsuario: tipoUsuario;


    @OneToOne(type => pessoa, usuario => usuario)
    pessoa:pessoa;

}