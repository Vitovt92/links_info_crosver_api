import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SystemPowerLittleSpConnectionTables } from "./SystemPowerLittleSpConnectionTables";

@Entity("little_system_power_tables", { schema: "dev_linksdb" })
export class LittleSystemPowerTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("tinyint", {
    name: "actual",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  actual: boolean | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => SystemPowerLittleSpConnectionTables,
    (systemPowerLittleSpConnectionTables) =>
      systemPowerLittleSpConnectionTables.littleSystemPowerTable
  )
  systemPowerLittleSpConnectionTables: SystemPowerLittleSpConnectionTables[];
}
