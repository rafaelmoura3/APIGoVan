import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPagamento1632683164616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'pagamento',
            columns: [
                {
                    name: 'uuid',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                
                {
                    name: 'forma_de_pagamento',
                    type: 'varchar'
                },
                {
                    name: 'valor_pago',
                    type: 'real'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pagamento');
    }

}
