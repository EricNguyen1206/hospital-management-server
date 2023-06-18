import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration0021687086039399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "department" ADD CONSTRAINT "UQ_department_id" UNIQUE ("id");
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "department" DROP CONSTRAINT "UQ_department_id";
    `);
  }
}
