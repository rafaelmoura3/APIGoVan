import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMensalidade1626300141419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'mensalidade',
            columns: [
                {
                    name: "uuid",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name:"valor",
                    type:"uuid",
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name:"meses",
                    type:"integer"
                },
                {
                    name: "diaPagamento",
                    type: "text"
                },
                {
                    name:"pessoa",
                    type:""
                },
                {
                    name:"servico",
                    type:""
                },
                {
                    name:"mes_inicial",
                    type:"integer"
                },
                {
                    name:"mes_atual",
                    type:"interger"
                },
                {
                    name:"quitado",
                    type:"boolean"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tipoUsuario");
    }

}

