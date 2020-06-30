import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryCommentTables } from "./BatteryCommentTables";
import { BatteryPresenceConnectionTables } from "./BatteryPresenceConnectionTables";

@Entity("battery_tables", { schema: "dev_linksdb" })
export class BatteryTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Model", nullable: true, length: 255 })
  model: string | null;

  @Column("varchar", { name: "capacity", nullable: true, length: 255 })
  capacity: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("tinyint", {
    name: "actual",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  actual: boolean | null;

  @OneToMany(
    () => BatteryCommentTables,
    (batteryCommentTables) => batteryCommentTables.batteryTable
  )
  batteryCommentTables: BatteryCommentTables[];

  @OneToMany(
    () => BatteryPresenceConnectionTables,
    (batteryPresenceConnectionTables) =>
      batteryPresenceConnectionTables.batteryTable
  )
  batteryPresenceConnectionTables: BatteryPresenceConnectionTables[];
}
