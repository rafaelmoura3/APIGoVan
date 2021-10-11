import mongoose, { Schema } from 'mongoose';
import IServico from '../interfaces/servico_interface';

const ServicoSchema: Schema = new Schema(
    {
        motoristas_id: [{ type: String, required: true, trim: true, }],
        veiculos: [{
            placa: { type: String, required: true, unique: true, trim: true, index: true },
            nome: { type: String, required: true, trim: true, },
            cor: { type: String, required: true, trim: true, },
            url_foto: { type: String, required: false, trim: true, },
        }],
        trajeto: {
            descricao: { type: String, required: true, trim: true, },
            ponto_inicio: { type: String, required: true, trim: true, },
            ponto_fim: { type: String, required: true, trim: true, },
            horario_chegada: { type: String, required: true, trim: true, },
            valor_cobrado: { type: Number, required: true, },
        },
        contrato: {
            url_pdf: { type: String, required: true, trim: true, },
            descricao: { type: String, required: true, trim: true, },
            politica_cancelamento: { type: String, required: true, trim: true, },
        },
        passageiros: [{
            pessoa_id: { type: String, required: false, trim: true, },
            data_inicio_contrato: { type: String, required: false, trim: true, },
            data_fim_contrato: { type: String, required: false, trim: true, },
        }]
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IServico>('Servico', ServicoSchema);
