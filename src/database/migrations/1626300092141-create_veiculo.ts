import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createVeiculo1626300092141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'veiculo',
            columns: [
                {
                    name: "uuid",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "placa",
                    type: "varchar(10)"
                },
                {
                    name: "url",
                    type: "text"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("veiculo");
    }

}
