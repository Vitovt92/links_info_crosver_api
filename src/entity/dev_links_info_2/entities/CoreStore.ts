import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("core_store", { schema: "dev_links_info_2" })
export class CoreStore {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "key", nullable: true, length: 255 })
  key: string | null;

  @Column("longtext", { name: "value", nullable: true })
  value: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("varchar", { name: "environment", nullable: true, length: 255 })
  environment: string | null;

  @Column("varchar", { name: "tag", nullable: true, length: 255 })
  tag: string | null;
}
