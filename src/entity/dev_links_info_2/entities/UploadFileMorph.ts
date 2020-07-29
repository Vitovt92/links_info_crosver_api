import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("upload_file_morph", { schema: "dev_links_info_2" })
export class UploadFileMorph {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "upload_file_id", nullable: true })
  uploadFileId: number | null;

  @Column("int", { name: "related_id", nullable: true })
  relatedId: number | null;

  @Column("longtext", { name: "related_type", nullable: true })
  relatedType: string | null;

  @Column("longtext", { name: "field", nullable: true })
  field: string | null;

  @Column("int", { name: "order", nullable: true })
  order: number | null;
}
