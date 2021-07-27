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
                    type: 'varchar(500)'
                },
                {
                    name: 'contratoTipo',
                    type: 'text'
                },
                {
                    name: 'detalhes',
                    type: 'varchar(100)'
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
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contrato');
    }

}
