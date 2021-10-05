import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFatura1626300132308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'fatura',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'dataCriacao',
                    type: 'date'
                },
                {
                    name:'valorTotal',
                    type:'real'
                },
                {
                    name:'pagamento',
                    type:'varchar'
                },
                {
                    name:'formaPagamento',
                    type:'varchar'
                },
                {
                    name:'dataPagamento',
                    type:'varchar'
                },
                {
                    name:'observacao',
                    type:'varchar'
                },
                {
                    name:'mensalidade_id',
                    type:'uuid'
                },
                {
                    name:'pagamento_id',
                    type:'uuid'
                }
            ],
            
            foreignKeys:[
                {
                    name:'mensalidade_id',
                    columnNames: ['mensalidade_id'],
                    referencedTableName: 'mensalidade',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                },
		        {
                    name:'pagamento_id',
                    columnNames: ['pagamento_id'],
                    referencedTableName: 'pagamento',
                    referencedColumnNames: ['uuid'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fatura');
    }

}
