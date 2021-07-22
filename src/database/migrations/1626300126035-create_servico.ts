import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServico1626300126035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'servico',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'motorista',
                    type: 'text'
                },
                {
                    name:'passageiros',
                    type:'text'
                },
                {
                    name:'trajeto',
                    type:'text'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico');
    }

}
