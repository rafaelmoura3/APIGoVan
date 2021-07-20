import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFatura1626300132308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'fatura',
            columns: [
                {
                    name: "uuid",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "dataCriacao",
                    type: ""
                },
                {
                    name:"valorTotal",
                    type:"uuid",
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name:"pagamento",
                    type:""
                },
                {
                    name:"mensalidade",
                    type:""
                },
                {
                    name:"formaPagamento",
                    type:"text"
                },
                {
                    name:"dataPagamento",
                    type:"text"
                },
                {
                    name:"observacao",
                    type:"text"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fatura");
    }

}
