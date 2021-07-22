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
                    type: 'varchar(15)'
                },
                {
                    name: 'logadouro',
                    type: 'varchar(20)'
                },
                {
                    name: 'numero',
                    type: 'varchar(6)'
                },
                {
                    name: 'bairro',
                    type: 'varchar(50)' 
                },
                {
                    name: 'complemento',
                    type: 'varchar(50)'
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
