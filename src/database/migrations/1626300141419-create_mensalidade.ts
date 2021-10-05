import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMensalidade1626300141419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'mensalidade',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'valor',
                    type:'real'
                },
                {
                    name:'meses',
                    type:'integer'
                },
                {
                    name: 'diaPagamento',
                    type: 'varchar'
                },
                {
                    name:'mes_inicial',
                    type:'integer'
                },
                {
                    name:'mes_atual',
                    type:'integer'
                },
                {
                    name:'quitado',
                    type:'boolean'
                },
                {
                    name:'pessoa_id',
                    type:'uuid'
                },
                {
                    name:'servico_id',
                    type:'uuid'
                },
                {
                    name:'fatura_id',
                    type:'uuid'
                }
            ],
            foreignKeys:[
                {
                    name:'pessoa_id',
                    columnNames: ['pessoa_id'],
                    referencedTableName: 'pessoa',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'servico_id',
                    columnNames: ['servico_id'],
                    referencedTableName: 'servico',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'fatura_id',
                    columnNames: ['fatura_id'],
                    referencedTableName: 'fatura',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('mensalidade');
    }

}

