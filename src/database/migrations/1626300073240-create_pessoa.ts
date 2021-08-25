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
                    type: 'varchar'
                },
                {
                    name: 'apelido',
                    type: 'varchar'
                },
                {
                    name: 'rg',
                    type: 'varchar'
                },
                {
                    name: 'cpf',
                    type: 'varchar'
                },
                {
                    name: 'dataNascimento',
                    type: 'varchar'
                },
                {
                    name: 'contato',
                    type: 'varchar'
                },
                {
                    name: 'observacao',
                    type: 'varchar'
                },
                {
                    name: 'referencia',
                    type: 'varchar'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TipoUsuario');
    }

}
