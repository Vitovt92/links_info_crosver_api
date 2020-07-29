import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users-permissions_permission", { schema: "dev_links_info_2" })
export class UsersPermissionsPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("varchar", { name: "controller", length: 255 })
  controller: string;

  @Column("varchar", { name: "action", length: 255 })
  action: string;

  @Column("tinyint", { name: "enabled", width: 1 })
  enabled: boolean;

  @Column("varchar", { name: "policy", nullable: true, length: 255 })
  policy: string | null;

  @Column("int", { name: "role", nullable: true })
  role: number | null;
}
