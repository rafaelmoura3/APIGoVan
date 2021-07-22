import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1626299941536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'usuario',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'email',
                    type: 'varchar(200)'
                },
                {
                    name: 'senhaHas',
                    type: 'varchar(20)',
                },
                {
                    name: 'contato',
                    type: 'text'
                },
                {
                    name: 'urlFoto',
                    type: 'text'
                },
                {
                    name: 'usuarioTipo',
                    type: 'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
