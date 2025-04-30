import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordColumn1745136604032 implements MigrationInterface {
    name = 'AddPasswordColumn1745136604032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
