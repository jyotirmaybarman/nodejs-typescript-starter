import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExampleEntity1725693541352 implements MigrationInterface {
    name = 'AddExampleEntity1725693541352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "num" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "num" integer NOT NULL, CONSTRAINT "PK_c51733babe9cafbcc3814f619d9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "num"`);
    }

}
