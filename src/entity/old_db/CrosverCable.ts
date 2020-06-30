import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CrosverTables } from "./CrosverTables";
import { CableTables } from "./CableTables";

@Index("cableId", ["cableId"], {})
@Entity("CrosverCable", { schema: "dev_linksdb" })
export class CrosverCable {
  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "crosverId" })
  crosverId: number;

  @Column("int", { primary: true, name: "cableId" })
  cableId: number;

  @ManyToOne(
    () => CrosverTables,
    (crosverTables) => crosverTables.crosverCables,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "crosverId", referencedColumnName: "id" }])
  crosver: CrosverTables;

  @ManyToOne(() => CableTables, (cableTables) => cableTables.crosverCables, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cableId", referencedColumnName: "id" }])
  cable: CableTables;
}
