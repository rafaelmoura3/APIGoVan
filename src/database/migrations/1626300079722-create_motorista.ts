import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMotorista1626300079722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'motorista',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cnh',
                    type: 'integer'
                },
                {
                    name: 'pessoa_id',
                    type: 'uuid'
                }
            ],
            
            foreignKeys:[
                {
                    name:'pessoa_id',
                    columnNames: ['pessoa_id'],
                    referencedTableName: 'pessoa',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('motorista');
    }

}
