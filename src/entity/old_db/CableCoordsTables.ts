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
@Entity("cableCoords_tables", { schema: "dev_linksdb" })
export class CableCoordsTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "serialNumber", nullable: true })
  serialNumber: number | null;

  @Column("varchar", { name: "lat", nullable: true, length: 255 })
  lat: string | null;

  @Column("varchar", { name: "lng", nullable: true, length: 255 })
  lng: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "cableTableId", nullable: true })
  cableTableId: number | null;

  @ManyToOne(
    () => CableTables,
    (cableTables) => cableTables.cableCoordsTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "cableTableId", referencedColumnName: "id" }])
  cableTable: CableTables;
}
