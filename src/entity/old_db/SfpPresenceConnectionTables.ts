import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SfpTables } from "./SfpTables";
import { PresenceTables } from "./PresenceTables";

@Index("sfpTableId", ["sfpTableId"], {})
@Index("presenceTableId", ["presenceTableId"], {})
@Entity("sfp_presence_connection_tables", { schema: "dev_linksdb" })
export class SfpPresenceConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "connection_comment", nullable: true })
  connectionComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "sfpTableId", nullable: true })
  sfpTableId: number | null;

  @Column("int", { name: "presenceTableId", nullable: true })
  presenceTableId: number | null;

  @ManyToOne(
    () => SfpTables,
    (sfpTables) => sfpTables.sfpPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "sfpTableId", referencedColumnName: "id" }])
  sfpTable: SfpTables;

  @ManyToOne(
    () => PresenceTables,
    (presenceTables) => presenceTables.sfpPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "presenceTableId", referencedColumnName: "id" }])
  presenceTable: PresenceTables;
}
