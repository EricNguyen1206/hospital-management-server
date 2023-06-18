import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration0011687080478644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "employee" ADD CONSTRAINT "UQ_employee_id" UNIQUE ("id");
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "employee" DROP CONSTRAINT "UQ_employee_id";
    `);
  }
}
