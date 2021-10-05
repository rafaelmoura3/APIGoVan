import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createServico1626300126035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'servico',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'motorista_id',
                    type: 'text'
                },
                {
                    name:'passageiros_id',
                    type:'text'
                },
                {
                    name:'trajeto_id',
                    type:'text'
                },
                {
                    name:'veiculo_id',
                    type:'uuid'
                },
                {
                    name:'contrato_id',
                    type:'uuid'
                }
            ],
            foreignKeys:[
                {
                    name:'veiculo_id',
                    columnNames: ['veiculo_id'],
                    referencedTableName: 'veiculo',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'motorista_id',
                    columnNames: ['motorista_id'],
                    referencedTableName: 'motorista',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'passageiros_id',
                    columnNames: ['passageiros_id'],
                    referencedTableName: 'passageiros',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'trajeto_id',
                    columnNames: ['trajeto_id'],
                    referencedTableName: 'trajeto',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
                {
                    name:'contrato_id',
                    columnNames: ['contrato_id'],
                    referencedTableName: 'contrato',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('servico');
    }

}
