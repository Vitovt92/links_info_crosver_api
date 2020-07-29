import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("upload_file", { schema: "dev_links_info_2" })
export class UploadFile {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "alternativeText", nullable: true, length: 255 })
  alternativeText: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "width", nullable: true })
  width: number | null;

  @Column("int", { name: "height", nullable: true })
  height: number | null;

  @Column("longtext", { name: "formats", nullable: true })
  formats: string | null;

  @Column("varchar", { name: "hash", length: 255 })
  hash: string;

  @Column("varchar", { name: "ext", nullable: true, length: 255 })
  ext: string | null;

  @Column("varchar", { name: "mime", length: 255 })
  mime: string;

  @Column("decimal", { name: "size", precision: 10, scale: 2 })
  size: string;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("varchar", { name: "previewUrl", nullable: true, length: 255 })
  previewUrl: string | null;

  @Column("varchar", { name: "provider", length: 255 })
  provider: string;

  @Column("longtext", { name: "provider_metadata", nullable: true })
  providerMetadata: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;
}
