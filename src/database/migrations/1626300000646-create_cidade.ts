import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCidade1626300000646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'cidade',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment' 
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'estado_id',
                    type: 'integer'
                }
            ],
            
            foreignKeys:[
                {
                    name:'estado_id',
                    columnNames: ['estado_id'],
                    referencedTableName: 'estado',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ] 
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cidade');
    }

}
