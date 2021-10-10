import { Document } from 'mongoose';

export default interface IUsuario extends Document {
    email: string;
    senha: string;
    url_foto: string;
    is_motorista: boolean;
    pessoa: {
        nome: string;
        apelido: string;
        telefone: string;
        rg: string;
        cpf: string;
        cnh: string;
        endereco: {
            cep: string;
            logadouro: string;
            numero: string;
            bairro: string;
            complemento: string;
            cidade: string;
        }
    }
}
