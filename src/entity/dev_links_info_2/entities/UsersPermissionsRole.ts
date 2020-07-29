import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users-permissions_role_type_unique", ["type"], { unique: true })
@Entity("users-permissions_role", { schema: "dev_links_info_2" })
export class UsersPermissionsRole {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    unique: true,
    length: 255,
  })
  type: string | null;
}
