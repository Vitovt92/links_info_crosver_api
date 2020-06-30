import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SfpCommentTables } from "./SfpCommentTables";
import { SfpPresenceConnectionTables } from "./SfpPresenceConnectionTables";

@Entity("sfp_tables", { schema: "dev_linksdb" })
export class SfpTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "sfpModel", nullable: true, length: 255 })
  sfpModel: string | null;

  @Column("varchar", { name: "sfpType", nullable: true, length: 255 })
  sfpType: string | null;

  @Column("varchar", { name: "sfpRange", nullable: true, length: 255 })
  sfpRange: string | null;

  @Column("varchar", { name: "connectionType", nullable: true, length: 255 })
  connectionType: string | null;

  @Column("varchar", { name: "speed", nullable: true, length: 255 })
  speed: string | null;

  @Column("text", { name: "sfpComments", nullable: true })
  sfpComments: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => SfpCommentTables,
    (sfpCommentTables) => sfpCommentTables.sfpTable
  )
  sfpCommentTables: SfpCommentTables[];

  @OneToMany(
    () => SfpPresenceConnectionTables,
    (sfpPresenceConnectionTables) => sfpPresenceConnectionTables.sfpTable
  )
  sfpPresenceConnectionTables: SfpPresenceConnectionTables[];
}
