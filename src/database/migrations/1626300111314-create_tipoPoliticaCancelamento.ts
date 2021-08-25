import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTipoPoliticaCancelamento1626300111314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'tipoPoliticaCancelamento',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment' 
                },
                {
                    name: 'descricao',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipoPoliticaCancelamento');
    }

}
