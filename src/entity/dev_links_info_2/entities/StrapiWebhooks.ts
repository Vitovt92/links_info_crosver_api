import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("strapi_webhooks", { schema: "dev_links_info_2" })
export class StrapiWebhooks {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("longtext", { name: "url", nullable: true })
  url: string | null;

  @Column("longtext", { name: "headers", nullable: true })
  headers: string | null;

  @Column("longtext", { name: "events", nullable: true })
  events: string | null;

  @Column("tinyint", { name: "enabled", nullable: true, width: 1 })
  enabled: boolean | null;
}
