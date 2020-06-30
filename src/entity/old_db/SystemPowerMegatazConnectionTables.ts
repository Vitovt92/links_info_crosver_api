import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MegatazTables } from "./MegatazTables";

@Index("systemPowerTableId", ["systemPowerTableId"], {})
@Index("megatazTableId", ["megatazTableId"], {})
@Entity("system_power_megataz_connection_tables", { schema: "dev_linksdb" })
export class SystemPowerMegatazConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "left_right", nullable: true })
  leftRight: string | null;

  @Column("text", { name: "connection_comment", nullable: true })
  connectionComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "systemPowerTableId", nullable: true })
  systemPowerTableId: number | null;

  @Column("int", { name: "megatazTableId", nullable: true })
  megatazTableId: number | null;

  @ManyToOne(
    () => MegatazTables,
    (megatazTables) => megatazTables.systemPowerMegatazConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "megatazTableId", referencedColumnName: "id" }])
  megatazTable: MegatazTables;
}
