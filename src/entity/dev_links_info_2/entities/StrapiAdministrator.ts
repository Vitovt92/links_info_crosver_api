import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("strapi_administrator_username_unique", ["username"], { unique: true })
@Entity("strapi_administrator", { schema: "dev_links_info_2" })
export class StrapiAdministrator {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "username", unique: true, length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", {
    name: "resetPasswordToken",
    nullable: true,
    length: 255,
  })
  resetPasswordToken: string | null;

  @Column("tinyint", { name: "blocked", nullable: true, width: 1 })
  blocked: boolean | null;
}
