import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BatteryTables } from "./BatteryTables";
import { PresenceTables } from "./PresenceTables";

@Index("batteryTableId", ["batteryTableId"], {})
@Index("presenceTableId", ["presenceTableId"], {})
@Entity("battery_presence_connection_tables", { schema: "dev_linksdb" })
export class BatteryPresenceConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "connection_comment", nullable: true })
  connectionComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "batteryTableId", nullable: true })
  batteryTableId: number | null;

  @Column("int", { name: "presenceTableId", nullable: true })
  presenceTableId: number | null;

  @ManyToOne(
    () => BatteryTables,
    (batteryTables) => batteryTables.batteryPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "batteryTableId", referencedColumnName: "id" }])
  batteryTable: BatteryTables;

  @ManyToOne(
    () => PresenceTables,
    (presenceTables) => presenceTables.batteryPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "presenceTableId", referencedColumnName: "id" }])
  presenceTable: PresenceTables;
}
