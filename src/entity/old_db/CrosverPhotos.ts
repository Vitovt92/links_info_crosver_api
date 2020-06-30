import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CrosverTables } from "./CrosverTables";

@Index("crosverTableId", ["crosverTableId"], {})
@Entity("crosver_Photos", { schema: "dev_linksdb" })
export class CrosverPhotos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "photoName", nullable: true, length: 255 })
  photoName: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "crosverTableId", nullable: true })
  crosverTableId: number | null;

  @ManyToOne(
    () => CrosverTables,
    (crosverTables) => crosverTables.crosverPhotos,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "crosverTableId", referencedColumnName: "id" }])
  crosverTable: CrosverTables;
}
