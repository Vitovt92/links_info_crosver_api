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
@Entity("presence_Photos", { schema: "dev_linksdb" })
export class PresencePhotos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "photoName", nullable: true, length: 255 })
  photoName: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "presenceTableId", nullable: true })
  presenceTableId: number | null;

  @ManyToOne(
    () => PresenceTables,
    (presenceTables) => presenceTables.presencePhotos,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "presenceTableId", referencedColumnName: "id" }])
  presenceTable: PresenceTables;
}
