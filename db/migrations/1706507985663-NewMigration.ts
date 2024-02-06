import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1706507985663 implements MigrationInterface {
    name = 'NewMigration1706507985663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anime" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anime" DROP COLUMN "description"`);
    }

}
