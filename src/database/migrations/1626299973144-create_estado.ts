import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEstado1626299973144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'estado',
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
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'uf',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estado');
    }

}
