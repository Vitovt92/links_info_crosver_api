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
@Entity("cable_comment_tables", { schema: "dev_linksdb" })
export class CableCommentTables {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "userOfComment", nullable: true, length: 255 })
  userOfComment: string | null;

  @Column("text", { name: "textOfComment", nullable: true })
  textOfComment: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "cableTableId", nullable: true })
  cableTableId: number | null;

  @ManyToOne(
    () => CableTables,
    (cableTables) => cableTables.cableCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "cableTableId", referencedColumnName: "id" }])
  cableTable: CableTables;
}
