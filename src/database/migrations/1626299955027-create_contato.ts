import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContato1626299955027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'contato',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                
                {
                    name: 'valor',
                    type: 'varchar'
                },
                {
                    name: 'tipoContato_id',
                    type: 'uuid'
                }
            ],
            foreignKeys:[
                {
                    name:'tipoContato',
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
        await queryRunner.dropTable('contato');
    }

}
