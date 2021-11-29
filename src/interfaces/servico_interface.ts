import { Document } from 'mongoose';

export default interface IServico extends Document {
  titulo: string,
  descricao: string,
  vagas_disponiveis: number,
  veiculos: [{
    placa: string,
    nome: string,
    cor: string,
    url_foto: string,
  }],
  trajeto: {
    descricao: string,
    ponto_inicio: string,
    ponto_fim: string,
    valor_cobrado: string,
    faculdades: [{
      nome: string,
      horario_chegada: string,
    }],
  },
  contrato: {
    url_pdf: string,
    descricao: string,
    politica_cancelamento: {
      is_requerido: boolean,
      meses_minimo: number,
    },
  },
  motorista: {
    pessoa_id: string,
    nome: string,
  }
  passageiros: [{
    pessoa_id: string,
    data_inicio_contrato: string,
    data_fim_contrato: string,
    mensalidade: [{
      data_vencimento: string,
      valor: number,
      is_pago: boolean,
      forma_pagamento: string,
    }]
  }],
}
