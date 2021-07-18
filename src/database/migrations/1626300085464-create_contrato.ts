import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContrato1626300085464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'contrato',
            columns: [
                {
                    name: "uuid",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "tipoContrato",
                    type: " "
                },
                {
                    name: "urlPDF",
                    type: "varchar(500)"
                },
                {
                    name: "contratoTipo",
                    type: " "
                },
                {
                    name: "detalhes",
                    type: "varchar(100)"
                },
                {
                    name: "dataInicio",
                    type: " "
                },
                {
                    name: "dataFim",
                    type: " "
                },
                {
                    name: "dataRenovacao",
                    type: " "
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contrato");
    }

}
