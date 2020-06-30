import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrosverCable } from "./CrosverCable";
import { CableCrosverConnectionTables } from "./CableCrosverConnectionTables";
import { CrosverPhotos } from "./CrosverPhotos";
import { CrosverCommentTables } from "./CrosverCommentTables";

@Entity("crosver_tables", { schema: "dev_linksdb" })
export class CrosverTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "crosverLocation", nullable: true, length: 255 })
  crosverLocation: string | null;

  @Column("text", { name: "crosverDocks", nullable: true })
  crosverDocks: string | null;

  @Column("text", { name: "crosverComments", nullable: true })
  crosverComments: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("varchar", { name: "lat", nullable: true, length: 255 })
  lat: string | null;

  @Column("varchar", { name: "lng", nullable: true, length: 255 })
  lng: string | null;

  @OneToMany(() => CrosverCable, (crosverCable) => crosverCable.crosver)
  crosverCables: CrosverCable[];

  @OneToMany(
    () => CableCrosverConnectionTables,
    (cableCrosverConnectionTables) => cableCrosverConnectionTables.crosverTable
  )
  cableCrosverConnectionTables: CableCrosverConnectionTables[];

  @OneToMany(() => CrosverPhotos, (crosverPhotos) => crosverPhotos.crosverTable)
  crosverPhotos: CrosverPhotos[];

  @OneToMany(
    () => CrosverCommentTables,
    (crosverCommentTables) => crosverCommentTables.crosverTable
  )
  crosverCommentTables: CrosverCommentTables[];
}
