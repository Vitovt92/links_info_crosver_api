import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConverterTables } from "./ConverterTables";

@Index("converterTableId", ["converterTableId"], {})
@Entity("converter_comment_tables", { schema: "dev_linksdb" })
export class ConverterCommentTables {
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

  @Column("int", { name: "converterTableId", nullable: true })
  converterTableId: number | null;

  @ManyToOne(
    () => ConverterTables,
    (converterTables) => converterTables.converterCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "converterTableId", referencedColumnName: "id" }])
  converterTable: ConverterTables;
}
