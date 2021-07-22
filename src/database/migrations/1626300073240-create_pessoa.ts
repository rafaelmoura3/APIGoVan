import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPessoa1626300073240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'pessoa',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'nome',
                    type: 'varchar(300)'
                },
                {
                    name: 'apelido',
                    type: 'varchar(20)'
                },
                {
                    name: 'rg',
                    type: 'varchar(20)'
                },
                {
                    name: 'cpf',
                    type: 'varchar(15)'
                },
                {
                    name: 'dataNascimento',
                    type: 'varchar(15)'
                },
                {
                    name: 'contato',
                    type: 'varchar(15)'
                },
                {
                    name: 'observacao',
                    type: 'varchar(100)'
                },
                {
                    name: 'referencia',
                    type: 'varchar(30)'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TipoUsuario');
    }

}
