import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContrato1626300085464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'contrato',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'tipoContrato',
                    type: 'text'
                },
                {
                    name: 'urlPDF',
                    type: 'varchar'
                },
                {
                    name: 'detalhes',
                    type: 'varchar'
                },
                {
                    name: 'dataInicio',
                    type: 'date'
                },
                {
                    name: 'dataFim',
                    type: 'date'
                },
                {
                    name: 'dataRenovacao',
                    type: 'date'
                },
                {
                    name: 'tipoContrato_id',
                    type: 'uuid'
                }

            ],
            foreignKeys:[
                {
                    name:'tipoContrato',
                    columnNames: ['tipoContrato_id'],
                    referencedTableName: 'tipoContato',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contrato');
    }

}
