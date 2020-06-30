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
@Entity("crosver_comment_tables", { schema: "dev_linksdb" })
export class CrosverCommentTables {
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

  @Column("int", { name: "crosverTableId", nullable: true })
  crosverTableId: number | null;

  @ManyToOne(
    () => CrosverTables,
    (crosverTables) => crosverTables.crosverCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "crosverTableId", referencedColumnName: "id" }])
  crosverTable: CrosverTables;
}
