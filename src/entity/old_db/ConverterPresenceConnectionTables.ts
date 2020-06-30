import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConverterTables } from "./ConverterTables";
import { PresenceTables } from "./PresenceTables";

@Index("converterTableId", ["converterTableId"], {})
@Index("presenceTableId", ["presenceTableId"], {})
@Entity("converter_presence_connection_tables", { schema: "dev_linksdb" })
export class ConverterPresenceConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "connection_comment", nullable: true })
  connectionComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "converterTableId", nullable: true })
  converterTableId: number | null;

  @Column("int", { name: "presenceTableId", nullable: true })
  presenceTableId: number | null;

  @ManyToOne(
    () => ConverterTables,
    (converterTables) => converterTables.converterPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "converterTableId", referencedColumnName: "id" }])
  converterTable: ConverterTables;

  @ManyToOne(
    () => PresenceTables,
    (presenceTables) => presenceTables.converterPresenceConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "presenceTableId", referencedColumnName: "id" }])
  presenceTable: PresenceTables;
}
