import mongoose, { Schema } from 'mongoose';
import IServico from '../interfaces/servico_interface';

const ServicoSchema: Schema = new Schema(
    {
        titulo: { type: String, required: true, trim: true, },
        descricao: { type: String, required: true, trim: true, },
        vagas_disponiveis: { type: Number, required: true, },
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
            valor_cobrado: { type: Number, required: true, },
            faculdades: [{
                nome: { type: String, required: true, trim: true, },
                horario_chegada: { type: String, required: true, trim: true, },
            }],
        },
        contrato: {
            url_pdf: { type: String, required: true, trim: true, },
            descricao: { type: String, required: true, trim: true, },
            politica_cancelamento: {
                is_requerido: { type: Boolean, required: true, trim: true, },
                meses_minimo: { type: Number, required: false, trim: true, },
            },
        },
        passageiros: [{
            pessoa_id: { type: String, required: false, trim: true, },
            data_inicio_contrato: { type: String, required: false, trim: true, },
            data_fim_contrato: { type: String, required: false, trim: true, },
            mensalidade: [{
                data_pagamento: { type: String, required: false, trim: true, },
                pagamento: [{
                    valor: { type: Number, required: true, },
                    is_pago: { type: Boolean, required: true, trim: true, },
                    forma_pagamento: { type: Number, required: false, },
                }],
            }]
        }],
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IServico>('Servico', ServicoSchema);
