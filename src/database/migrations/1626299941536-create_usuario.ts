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
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'senhaHas',
                    type: 'varchar',
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
                },
                {
                    name: 'tipoContato_id',
                    type: 'uuid'
                }
            ],
            foreignKeys:[
                {
                    name:'contato',
                    columnNames: ['tipoContato_id'],
                    referencedTableName: 'tipoContato',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
