import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BatteryTables } from "./BatteryTables";

@Index("batteryTableId", ["batteryTableId"], {})
@Entity("battery_comment_tables", { schema: "dev_linksdb" })
export class BatteryCommentTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "userOfComment", nullable: true, length: 255 })
  userOfComment: string | null;

  @Column("text", { name: "textOfComment", nullable: true })
  textOfComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "batteryTableId", nullable: true })
  batteryTableId: number | null;

  @ManyToOne(
    () => BatteryTables,
    (batteryTables) => batteryTables.batteryCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "batteryTableId", referencedColumnName: "id" }])
  batteryTable: BatteryTables;
}
