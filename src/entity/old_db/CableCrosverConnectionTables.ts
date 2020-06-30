import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CableTables } from "./CableTables";
import { CrosverTables } from "./CrosverTables";

@Index("cableTableId", ["cableTableId"], {})
@Index("crosverTableId", ["crosverTableId"], {})
@Entity("cable_crosver_connection_tables", { schema: "dev_linksdb" })
export class CableCrosverConnectionTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "cableTableId", nullable: true })
  cableTableId: number | null;

  @Column("int", { name: "crosverTableId", nullable: true })
  crosverTableId: number | null;

  @ManyToOne(
    () => CableTables,
    (cableTables) => cableTables.cableCrosverConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "cableTableId", referencedColumnName: "id" }])
  cableTable: CableTables;

  @ManyToOne(
    () => CrosverTables,
    (crosverTables) => crosverTables.cableCrosverConnectionTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "crosverTableId", referencedColumnName: "id" }])
  crosverTable: CrosverTables;
}
