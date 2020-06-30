import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SystemPowerTables } from "./SystemPowerTables";
import { LittleSystemPowerTables } from "./LittleSystemPowerTables";

@Index("systemPowerTableId", ["systemPowerTableId"], {})
@Index("littleSystemPowerTableId", ["littleSystemPowerTableId"], {})
@Entity("system_power_littleSp_connection_tables", { schema: "dev_linksdb" })
export class SystemPowerLittleSpConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "server_alias", nullable: true })
  serverAlias: string | null;

  @Column("text", { name: "connection_comment", nullable: true })
  connectionComment: string | null;

  @Column("tinyint", {
    name: "actual",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  actual: boolean | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "systemPowerTableId", nullable: true })
  systemPowerTableId: number | null;

  @Column("int", { name: "littleSystemPowerTableId", nullable: true })
  littleSystemPowerTableId: number | null;

  @ManyToOne(
    () => SystemPowerTables,
    (systemPowerTables) =>
      systemPowerTables.systemPowerLittleSpConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "systemPowerTableId", referencedColumnName: "id" }])
  systemPowerTable: SystemPowerTables;

  @ManyToOne(
    () => LittleSystemPowerTables,
    (littleSystemPowerTables) =>
      littleSystemPowerTables.systemPowerLittleSpConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "littleSystemPowerTableId", referencedColumnName: "id" },
  ])
  littleSystemPowerTable: LittleSystemPowerTables;
}
