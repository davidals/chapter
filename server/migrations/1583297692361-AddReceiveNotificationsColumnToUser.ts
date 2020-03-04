import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReceiveNotificationsColumnToUser1583297692361
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "receive_notifications" BOOLEAN DEFAULT TRUE NOT NULL`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "receive_notifications`,
      undefined,
    );
  }
}
