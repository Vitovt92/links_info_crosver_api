import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users-permissions_user_username_unique", ["username"], { unique: true })
@Entity("users-permissions_user", { schema: "dev_links_info_2" })
export class UsersPermissionsUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "username", unique: true, length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "provider", nullable: true, length: 255 })
  provider: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", {
    name: "resetPasswordToken",
    nullable: true,
    length: 255,
  })
  resetPasswordToken: string | null;

  @Column("tinyint", { name: "confirmed", nullable: true, width: 1 })
  confirmed: boolean | null;

  @Column("tinyint", { name: "blocked", nullable: true, width: 1 })
  blocked: boolean | null;

  @Column("int", { name: "role", nullable: true })
  role: number | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;
}
