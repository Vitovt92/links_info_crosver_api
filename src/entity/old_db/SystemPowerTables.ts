import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SystemPowerCommentTables } from "./SystemPowerCommentTables";
import { SystemPowerLittleSpConnectionTables } from "./SystemPowerLittleSpConnectionTables";

@Entity("system_power_tables", { schema: "dev_linksdb" })
export class SystemPowerTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Model", nullable: true, length: 255 })
  model: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => SystemPowerCommentTables,
    (systemPowerCommentTables) => systemPowerCommentTables.systemPowerTable
  )
  systemPowerCommentTables: SystemPowerCommentTables[];

  @OneToMany(
    () => SystemPowerLittleSpConnectionTables,
    (systemPowerLittleSpConnectionTables) =>
      systemPowerLittleSpConnectionTables.systemPowerTable
  )
  systemPowerLittleSpConnectionTables: SystemPowerLittleSpConnectionTables[];
}
