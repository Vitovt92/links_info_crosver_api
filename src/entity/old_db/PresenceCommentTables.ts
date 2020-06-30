import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PresenceTables } from "./PresenceTables";

@Index("presenceTableId", ["presenceTableId"], {})
@Entity("presence_comment_tables", { schema: "dev_linksdb" })
export class PresenceCommentTables {
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

  @Column("int", { name: "presenceTableId", nullable: true })
  presenceTableId: number | null;

  @ManyToOne(
    () => PresenceTables,
    (presenceTables) => presenceTables.presenceCommentTables,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "presenceTableId", referencedColumnName: "id" }])
  presenceTable: PresenceTables;
}
