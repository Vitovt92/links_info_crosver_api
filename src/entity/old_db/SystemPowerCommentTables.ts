import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SystemPowerTables } from "./SystemPowerTables";

@Index(
  "system_power_comment_tables_systemPowerTableId_foreign_idx",
  ["systemPowerTableId"],
  {}
)
@Entity("system_power_comment_tables", { schema: "dev_linksdb" })
export class SystemPowerCommentTables {
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

  @Column("int", { name: "systemPowerTableId", nullable: true })
  systemPowerTableId: number | null;

  @Column("int", {
    name: "typeOfComment",
    nullable: true,
    default: () => "'0'",
  })
  typeOfComment: number | null;

  @Column("varchar", {
    name: "additionalСolumn",
    nullable: true,
    length: 255,
    default: () => "'0'",
  })
  additionalOlumn: string | null;

  @ManyToOne(
    () => SystemPowerTables,
    (systemPowerTables) => systemPowerTables.systemPowerCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "systemPowerTableId", referencedColumnName: "id" }])
  systemPowerTable: SystemPowerTables;
}
