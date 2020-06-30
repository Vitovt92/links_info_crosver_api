import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SystemPowerMegatazConnectionTables } from "./SystemPowerMegatazConnectionTables";

@Entity("megataz_tables", { schema: "dev_linksdb" })
export class MegatazTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "alias", nullable: true, length: 255 })
  alias: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("tinyint", { name: "actual", nullable: true, width: 1 })
  actual: boolean | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => SystemPowerMegatazConnectionTables,
    (systemPowerMegatazConnectionTables) =>
      systemPowerMegatazConnectionTables.megatazTable
  )
  systemPowerMegatazConnectionTables: SystemPowerMegatazConnectionTables[];
}
