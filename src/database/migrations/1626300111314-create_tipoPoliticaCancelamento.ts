import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTipoPoliticaCancelamento1626300111314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'TipoPoliticaCancelamento',
            columns: [
                {
                    name: "uuid",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "descricao",
                    type: "varchar(300)"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TipoPoliticaCancelamento");
    }

}
