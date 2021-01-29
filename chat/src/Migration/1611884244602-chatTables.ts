import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class chatTables1611884244602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:"User",
            columns:[
                    {
                        name:"Id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"Name",
                        type:"varchar"
                    },
                    {
                        name:"Login",
                        type:"varchar"
                    },
                    {
                        name:"Password",
                        type:"varchar"
                    },
                    {
                        name:"Document",
                        type:"varchar"
                    },
                    {
                        name:"Photo",
                        type:"varchar"
                    },
                    {
                        name:"IdSex",
                        type:"int"
                    },
                    {
                        name:"Mail",
                        type:"varchar"
                    },
                    {
                        name:"Mail2",
                        type:"varchar"
                    },
                    {
                        name:"IdProfile",
                        type:"int"
                    }



            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User');
    }

}
