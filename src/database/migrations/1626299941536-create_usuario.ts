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
                    name: 'urlFoto',
                    type: 'text'
                },
                {
                    name: 'tipoUsuario_id',
                    type: 'uuid'
                },
                {
                    name: 'contato_id',
                    type: 'uuid'
                }
            ],
            
            foreignKeys:[
                {
                    name:'tipoUsuario_id',
                    columnNames: ['tipoUsuario_id'],
                    referencedTableName: 'tipoUsuario',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'contato_id',
                    columnNames: ['contato_id'],
                    referencedTableName: 'contato',
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
