import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SfpTables } from "./SfpTables";

@Index("sfpTableId", ["sfpTableId"], {})
@Entity("sfp_comment_tables", { schema: "dev_linksdb" })
export class SfpCommentTables {
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

  @Column("int", { name: "sfpTableId", nullable: true })
  sfpTableId: number | null;

  @ManyToOne(() => SfpTables, (sfpTables) => sfpTables.sfpCommentTables, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "sfpTableId", referencedColumnName: "id" }])
  sfpTable: SfpTables;
}
