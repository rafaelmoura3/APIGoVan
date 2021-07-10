import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPassageiros1625951623481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'passageiros',
            columns: [
                {
                    name: 'id',
                    type: 'interger',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
            ],
        }))    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    }

}
