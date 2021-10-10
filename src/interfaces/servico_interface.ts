import { Document } from 'mongoose';

export default interface IServico extends Document {
  motoristas_id: string[],
  veiculos: [{
    placa: string;
    nome: string;
    cor: string;
    url_foto: string;
  }],
  trajeto: {
    descricao: string;
    ponto_inicio: string;
    ponto_fim: string;
    horario_chegada: string;
    valor_cobrado: number;
  },
  contrato: {
    url_pdf: string;
    descricao: string;
    politica_cancelamento: string;
  },
  passageiros: [{
    pessoa_id: string;
    data_inicio_contrato: string;
    data_fim_contrato: string;
  }]
}
