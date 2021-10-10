import mongoose, { Schema } from 'mongoose';
import IUsuario from '../interfaces/usuario_interface';

const UsuarioSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
        senha: { type: String, required: true, trim: true, },
        url_foto: { type: String, required: true, trim: true, },
        is_motorista: { type: Boolean, required: true, },
        pessoa: {
            nome: { type: String, required: true, trim: true, },
            apelido: { type: String, required: true, trim: true, },
            telefone: { type: String, required: true, trim: true, },
            rg: { type: String, required: true, trim: true, },
            cpf: { type: String, required: true, trim: true, },
            cnh: { type: String, required: true, trim: true, },
            endereco: {
                cep: { type: String, required: true, trim: true, },
                logadouro: { type: String, required: true, trim: true, },
                numero: { type: String, required: true, trim: true, },
                bairro: { type: String, required: true, trim: true, },
                complemento: { type: String, required: true, trim: true, },
                cidade: { type: String, required: true, trim: true, },
            }
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);
