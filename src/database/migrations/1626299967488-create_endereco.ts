import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEndereco1626299967488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'endereco',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'logadouro',
                    type: 'varchar'
                },
                {
                    name: 'numero',
                    type: 'varchar'
                },
                {
                    name: 'bairro',
                    type: 'varchar' 
                },
                {
                    name: 'complemento',
                    type: 'varchar'
                },
                {
                    name: 'cidade',
                    type: 'text'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereco');
    }

}
