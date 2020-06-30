import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryPresenceConnectionTables } from "./BatteryPresenceConnectionTables";
import { ConverterPresenceConnectionTables } from "./ConverterPresenceConnectionTables";
import { PresencePhotos } from "./PresencePhotos";
import { PresenceCommentTables } from "./PresenceCommentTables";
import { SfpPresenceConnectionTables } from "./SfpPresenceConnectionTables";

@Entity("presence_tables", { schema: "dev_linksdb" })
export class PresenceTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "presenceLocation", nullable: true, length: 255 })
  presenceLocation: string | null;

  @Column("text", { name: "presenceComments", nullable: true })
  presenceComments: string | null;

  @Column("float", { name: "lat", nullable: true, precision: 12 })
  lat: number | null;

  @Column("float", { name: "lng", nullable: true, precision: 12 })
  lng: number | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => BatteryPresenceConnectionTables,
    (batteryPresenceConnectionTables) =>
      batteryPresenceConnectionTables.presenceTable
  )
  batteryPresenceConnectionTables: BatteryPresenceConnectionTables[];

  @OneToMany(
    () => ConverterPresenceConnectionTables,
    (converterPresenceConnectionTables) =>
      converterPresenceConnectionTables.presenceTable
  )
  converterPresenceConnectionTables: ConverterPresenceConnectionTables[];

  @OneToMany(
    () => PresencePhotos,
    (presencePhotos) => presencePhotos.presenceTable
  )
  presencePhotos: PresencePhotos[];

  @OneToMany(
    () => PresenceCommentTables,
    (presenceCommentTables) => presenceCommentTables.presenceTable
  )
  presenceCommentTables: PresenceCommentTables[];

  @OneToMany(
    () => SfpPresenceConnectionTables,
    (sfpPresenceConnectionTables) => sfpPresenceConnectionTables.presenceTable
  )
  sfpPresenceConnectionTables: SfpPresenceConnectionTables[];
}
