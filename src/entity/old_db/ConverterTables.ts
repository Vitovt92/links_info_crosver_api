import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConverterCommentTables } from "./ConverterCommentTables";
import { ConverterPresenceConnectionTables } from "./ConverterPresenceConnectionTables";

@Entity("converter_tables", { schema: "dev_linksdb" })
export class ConverterTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "converterModel", nullable: true, length: 255 })
  converterModel: string | null;

  @Column("varchar", { name: "converterType", nullable: true, length: 255 })
  converterType: string | null;

  @Column("varchar", { name: "converterRange", nullable: true, length: 255 })
  converterRange: string | null;

  @Column("varchar", { name: "speed", nullable: true, length: 255 })
  speed: string | null;

  @Column("text", { name: "converterComments", nullable: true })
  converterComments: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => ConverterCommentTables,
    (converterCommentTables) => converterCommentTables.converterTable
  )
  converterCommentTables: ConverterCommentTables[];

  @OneToMany(
    () => ConverterPresenceConnectionTables,
    (converterPresenceConnectionTables) =>
      converterPresenceConnectionTables.converterTable
  )
  converterPresenceConnectionTables: ConverterPresenceConnectionTables[];
}
