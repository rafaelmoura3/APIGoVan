import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTrajeto1626300118244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'trajeto',
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
                    type: 'varchar'
                },
                {
                    name: 'pontoInicio',
                    type: 'varchar'
                },
                {
                    name: 'pontoDestino',
                    type: 'varchar'
                },
                {
                    name: 'horarioChegada',
                    type: 'varchar'
                },
                {
                    name: 'valorCobrado',
                    type: 'real'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('trajeto');
    }

}
