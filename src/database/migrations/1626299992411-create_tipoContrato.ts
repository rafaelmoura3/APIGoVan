import {MigrationInterface, QueryRunner, Table} from "typeorm";
import tipoPoliticaCancelamento from "../../models/tipoPoliticaCancelamento";

export class createTipoContrato1626299992411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'tipoContrato',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'descricao',
                    type: 'varchar(500)'
                },
                {
                    name: 'tipoPoliticaCancelamento_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name:'tipoPoliticaCancelamento',
                    columnNames: ['tipoPoliticaCancelamento_id'],
                    referencedTableName: 'TipoPoliticaCancelamento',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipoContrato');
    }

}
