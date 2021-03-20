import {MigrationInterface, QueryRunner} from "typeorm";

export class Relationale1616210736069 implements MigrationInterface {
    name = 'Relationale1616210736069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_9c4e4a89e3674fc9f382d733f03" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_e29806c204b3881e26ee9f2f935" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_844eb6b9ce31e9606b31c8693f4" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_1031171c13130102495201e3e20" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_e9bf444a88e2c7d0c9a16b6a837" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_0859ddc5468938d281d69e5a851" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "Amount" int NOT NULL, "Invoice" nvarchar(255) NOT NULL, "Comment" nvarchar(255) NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item" ("id" int NOT NULL IDENTITY(1,1), "Quantity" int NOT NULL, "Price" int NOT NULL, "Invoice" nvarchar(255) NOT NULL, "productId" uniqueidentifier, "orderId" uniqueidentifier, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_904370c093ceea4369659a3c81" ON "order_item" ("productId") WHERE "productId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_646bf9ece6f45dbe41c203e06e" ON "order_item" ("orderId") WHERE "orderId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_bebc9158e480b949565b4dc7a82" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_77de598861edfebdfc8e5540056" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_3e9c665c73141e3a8eaa3aa2f05" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "Name" nvarchar(255) NOT NULL, "Descrition" nvarchar(255) NOT NULL, "Quantity" int NOT NULL, "Price" int NOT NULL, "Photo" nvarchar(255) NOT NULL, "Code" nvarchar(255) NOT NULL, "situationId" int, "categoryId" uniqueidentifier, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_435797b6cc3ea6e27860a3aa81" ON "product" ("situationId") WHERE "situationId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_ff0c0301a95e517153df97f681" ON "product" ("categoryId") WHERE "categoryId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "gender" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_98a711129bc073e6312d08364e8" DEFAULT NEWSEQUENTIALID(), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_98a711129bc073e6312d08364e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, "Description" nvarchar(255) NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_cace4a159ff9f2512dd42373760" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_56429d9d2928193fc66baf9971f" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_83f826d496536c76d35035864ea" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "Name" nvarchar(255) NOT NULL, "Login" nvarchar(255) NOT NULL, "Password" nvarchar(255) NOT NULL, "Document" nvarchar(255) NOT NULL, "Photo" nvarchar(255) NOT NULL, "Mail" nvarchar(255) NOT NULL, "Mail2" nvarchar(255) NOT NULL, "profileId" int, "genderId" uniqueidentifier, "situationId" int, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_9466682df91534dd95e4dbaa61" ON "user" ("profileId") WHERE "profileId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6273b1aa12d5d17f8e1284200b" ON "user" ("genderId") WHERE "genderId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_0385ecef9c6f5b0b7d5eb951b2" ON "user" ("situationId") WHERE "situationId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "situation" ("id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_50b87b9a57c35e00e7ae36b417b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "segment" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_d648ac58d8e0532689dfb8ad7ef" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_e27142ec784e9f759b9b76ed124" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_7cdcaa0cc2e7f673d65c0e637d9" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "Name" nvarchar(255) NOT NULL, "Description" nvarchar(255) NOT NULL, "commercialId" uniqueidentifier, "situationId" int, CONSTRAINT "PK_d648ac58d8e0532689dfb8ad7ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_93381f419b4a893e645c18d019" ON "segment" ("commercialId") WHERE "commercialId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_06baa36dbdec1c04a3b3c882b5" ON "segment" ("situationId") WHERE "situationId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "commercial_estabilishment" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_e8be3a5782f33d5377efb49d0ba" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_02fca0a9d122db079d1fb2b0475" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_935fd270ab6fdff273aa0151bd0" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "TraddingName" nvarchar(255) NOT NULL, "Document" nvarchar(255) NOT NULL, "Mail" nvarchar(255) NOT NULL, "Mail2" nvarchar(255) NOT NULL, "Photo" nvarchar(255) NOT NULL, CONSTRAINT "PK_e8be3a5782f33d5377efb49d0ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address_contact" ("id" int NOT NULL IDENTITY(1,1), "Neighborhood" nvarchar(255) NOT NULL, "ZipCode" nvarchar(255) NOT NULL, "Telephone" nvarchar(255) NOT NULL, "Cellphone" nvarchar(255) NOT NULL, "Number" int NOT NULL, "State" nvarchar(255) NOT NULL, "Address" nvarchar(255) NOT NULL, "userId" uniqueidentifier, "commercialId" uniqueidentifier, CONSTRAINT "PK_c7080920da604275c6376958711" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_1821fec45c58656d29b9912ec0" ON "address_contact" ("userId") WHERE "userId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fdd72518f96254fc810d273027" ON "address_contact" ("commercialId") WHERE "commercialId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "logger" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_46cad7e44f77ea2fa7da01e7828" DEFAULT NEWSEQUENTIALID(), "createad_at" datetime2 NOT NULL CONSTRAINT "DF_7156f158e2064c62d12321f96cf" DEFAULT getdate(), "update_at" datetime2 NOT NULL CONSTRAINT "DF_6c94b4e104e8f63c900765a1c8f" DEFAULT getdate(), "Hours" nvarchar(255) NOT NULL, "logger_date" datetime2 NOT NULL CONSTRAINT "DF_2db9fa2ffa12cf0910841f80124" DEFAULT getdate(), "Msg" nvarchar(255) NOT NULL, "Method" nvarchar(255) NOT NULL, "Json" nvarchar(255) NOT NULL, "Controller" nvarchar(255) NOT NULL, "Type" nvarchar(255) NOT NULL, CONSTRAINT "PK_46cad7e44f77ea2fa7da01e7828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_435797b6cc3ea6e27860a3aa81e" FOREIGN KEY ("situationId") REFERENCES "situation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6273b1aa12d5d17f8e1284200be" FOREIGN KEY ("genderId") REFERENCES "gender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0385ecef9c6f5b0b7d5eb951b27" FOREIGN KEY ("situationId") REFERENCES "situation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_93381f419b4a893e645c18d0195" FOREIGN KEY ("commercialId") REFERENCES "commercial_estabilishment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "segment" ADD CONSTRAINT "FK_06baa36dbdec1c04a3b3c882b5d" FOREIGN KEY ("situationId") REFERENCES "situation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address_contact" ADD CONSTRAINT "FK_1821fec45c58656d29b9912ec08" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address_contact" ADD CONSTRAINT "FK_fdd72518f96254fc810d2730276" FOREIGN KEY ("commercialId") REFERENCES "commercial_estabilishment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address_contact" DROP CONSTRAINT "FK_fdd72518f96254fc810d2730276"`);
        await queryRunner.query(`ALTER TABLE "address_contact" DROP CONSTRAINT "FK_1821fec45c58656d29b9912ec08"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_06baa36dbdec1c04a3b3c882b5d"`);
        await queryRunner.query(`ALTER TABLE "segment" DROP CONSTRAINT "FK_93381f419b4a893e645c18d0195"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0385ecef9c6f5b0b7d5eb951b27"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6273b1aa12d5d17f8e1284200be"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_435797b6cc3ea6e27860a3aa81e"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`DROP TABLE "logger"`);
        await queryRunner.query(`DROP INDEX "REL_fdd72518f96254fc810d273027" ON "address_contact"`);
        await queryRunner.query(`DROP INDEX "REL_1821fec45c58656d29b9912ec0" ON "address_contact"`);
        await queryRunner.query(`DROP TABLE "address_contact"`);
        await queryRunner.query(`DROP TABLE "commercial_estabilishment"`);
        await queryRunner.query(`DROP INDEX "REL_06baa36dbdec1c04a3b3c882b5" ON "segment"`);
        await queryRunner.query(`DROP INDEX "REL_93381f419b4a893e645c18d019" ON "segment"`);
        await queryRunner.query(`DROP TABLE "segment"`);
        await queryRunner.query(`DROP TABLE "situation"`);
        await queryRunner.query(`DROP INDEX "REL_0385ecef9c6f5b0b7d5eb951b2" ON "user"`);
        await queryRunner.query(`DROP INDEX "REL_6273b1aa12d5d17f8e1284200b" ON "user"`);
        await queryRunner.query(`DROP INDEX "REL_9466682df91534dd95e4dbaa61" ON "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "gender"`);
        await queryRunner.query(`DROP INDEX "REL_ff0c0301a95e517153df97f681" ON "product"`);
        await queryRunner.query(`DROP INDEX "REL_435797b6cc3ea6e27860a3aa81" ON "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP INDEX "REL_646bf9ece6f45dbe41c203e06e" ON "order_item"`);
        await queryRunner.query(`DROP INDEX "REL_904370c093ceea4369659a3c81" ON "order_item"`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
