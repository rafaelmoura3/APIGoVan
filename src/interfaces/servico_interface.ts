import { Document } from 'mongoose';

export default interface IServico extends Document {
  foto_servico_url: string,
  titulo: string,
  descricao: string,
  valor_cobrado: string,
  vagas_disponiveis: number,
  veiculos: [{
    placa: string,
    nome: string,
    cor: string,
    url_foto: string,
  }],
  trajeto: {
    descricao: string,
    ponto_inicio: {
      latitude: number,
      longitude: number,
    },
    faculdades: [{
      nome: string,
      horario_chegada: string,
      localizacao: {
        latitude: number,
        longitude: number,
      },
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
    pessoa_nome: string,
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
