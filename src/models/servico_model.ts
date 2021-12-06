import mongoose, { Schema } from 'mongoose';
import IServico from '../interfaces/servico_interface';

const ServicoSchema: Schema = new Schema(
    {
        titulo: { type: String, required: true, trim: true, },
        descricao: { type: String, required: true, trim: true, },
        valor_cobrado: { type: String, required: true, trim: true, },
        vagas_disponiveis: { type: Number, required: true, },
        veiculos: [{
            placa: { type: String, required: true, unique: true, trim: true, index: true },
            nome: { type: String, required: true, trim: true, },
            cor: { type: String, required: true, trim: true, },
            url_foto: { type: String, required: false, trim: true, },
        }],
        trajeto: {
            descricao: { type: String, required: true, trim: true, },
            ponto_inicio: {
                latitude: { type: Number, required: true, },
                longitude: { type: Number, required: true, },
            },
            faculdades: [{
                nome: { type: String, required: true, trim: true, },
                horario_chegada: { type: String, required: true, trim: true, },
                localizacao: {
                    latitude: { type: Number, required: true, },
                    longitude: { type: Number, required: true, },
                }
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
        motorista: {
            pessoa_id: { type: String, required: false, },
            nome: { type: String, required: false, },
        },
        passageiros: [{
            pessoa_id: { type: String, required: false, },
            pessoa_nome: { type: String, required: false, },
            data_inicio_contrato: { type: String, required: false, trim: true, },
            data_fim_contrato: { type: String, required: false, trim: true, },
            mensalidade: [{
                data_vencimento: { type: String, required: false, trim: true, },
                valor: { type: Number, required: false, },
                is_pago: { type: Boolean, required: false, trim: true, },
                forma_pagamento: { type: String, required: false, trim: true, },
            }]
        }],
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IServico>('Servico', ServicoSchema);
