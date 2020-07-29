import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doc_scans__documents", { schema: "dev_links_info_2" })
export class DocScansDocuments {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "doc_scan_id", nullable: true })
  docScanId: number | null;

  @Column("int", { name: "document_id", nullable: true })
  documentId: number | null;
}
