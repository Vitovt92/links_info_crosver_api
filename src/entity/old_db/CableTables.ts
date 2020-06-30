import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrosverCable } from "./CrosverCable";
import { CableCoordsTables } from "./CableCoordsTables";
import { CableScanActTables } from "./CableScanActTables";
import { CableScanCartogramTables } from "./CableScanCartogramTables";
import { CableScanContractTables } from "./CableScanContractTables";
import { CableScanProjectTables } from "./CableScanProjectTables";
import { CableScanReservationTables } from "./CableScanReservationTables";
import { CableScanTechnicalConditionTables } from "./CableScanTechnicalConditionTables";
import { CableCommentTables } from "./CableCommentTables";
import { CableCrosverConnectionTables } from "./CableCrosverConnectionTables";

@Entity("cable_tables", { schema: "dev_linksdb" })
export class CableTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "cablePointNameA", nullable: true, length: 255 })
  cablePointNameA: string | null;

  @Column("varchar", { name: "cablePointNameB", nullable: true, length: 255 })
  cablePointNameB: string | null;

  @Column("varchar", {
    name: "cableTechnicalConditions",
    nullable: true,
    length: 255,
  })
  cableTechnicalConditions: string | null;

  @Column("varchar", { name: "cableAct", nullable: true, length: 255 })
  cableAct: string | null;

  @Column("varchar", { name: "cableContract", nullable: true, length: 255 })
  cableContract: string | null;

  @Column("text", { name: "cableComments", nullable: true })
  cableComments: string | null;

  @Column("varchar", { name: "folder", nullable: true, length: 255 })
  folder: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("varchar", { name: "cableReservation", nullable: true, length: 255 })
  cableReservation: string | null;

  @Column("tinyint", {
    name: "actual",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  actual: boolean | null;

  @OneToMany(() => CrosverCable, (crosverCable) => crosverCable.cable)
  crosverCables: CrosverCable[];

  @OneToMany(
    () => CableCoordsTables,
    (cableCoordsTables) => cableCoordsTables.cableTable
  )
  cableCoordsTables: CableCoordsTables[];

  @OneToMany(
    () => CableScanActTables,
    (cableScanActTables) => cableScanActTables.cableTable
  )
  cableScanActTables: CableScanActTables[];

  @OneToMany(
    () => CableScanCartogramTables,
    (cableScanCartogramTables) => cableScanCartogramTables.cableTable
  )
  cableScanCartogramTables: CableScanCartogramTables[];

  @OneToMany(
    () => CableScanContractTables,
    (cableScanContractTables) => cableScanContractTables.cableTable
  )
  cableScanContractTables: CableScanContractTables[];

  @OneToMany(
    () => CableScanProjectTables,
    (cableScanProjectTables) => cableScanProjectTables.cableTable
  )
  cableScanProjectTables: CableScanProjectTables[];

  @OneToMany(
    () => CableScanReservationTables,
    (cableScanReservationTables) => cableScanReservationTables.cableTable
  )
  cableScanReservationTables: CableScanReservationTables[];

  @OneToMany(
    () => CableScanTechnicalConditionTables,
    (cableScanTechnicalConditionTables) =>
      cableScanTechnicalConditionTables.cableTable
  )
  cableScanTechnicalConditionTables: CableScanTechnicalConditionTables[];

  @OneToMany(
    () => CableCommentTables,
    (cableCommentTables) => cableCommentTables.cableTable
  )
  cableCommentTables: CableCommentTables[];

  @OneToMany(
    () => CableCrosverConnectionTables,
    (cableCrosverConnectionTables) => cableCrosverConnectionTables.cableTable
  )
  cableCrosverConnectionTables: CableCrosverConnectionTables[];
}
