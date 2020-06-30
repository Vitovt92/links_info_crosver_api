import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CableTables } from "./CableTables";

@Index("cableTableId", ["cableTableId"], {})
@Entity("cableScanAct_tables", { schema: "dev_linksdb" })
export class CableScanActTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "scanActsName", nullable: true, length: 255 })
  scanActsName: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "cableTableId", nullable: true })
  cableTableId: number | null;

  @ManyToOne(
    () => CableTables,
    (cableTables) => cableTables.cableScanActTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "cableTableId", referencedColumnName: "id" }])
  cableTable: CableTables;
}
