import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("events", { schema: "dev_links_info_2" })
export class Events {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "event_type", nullable: true })
  eventType: number | null;

  @Column("int", { name: "super_equipment", nullable: true })
  superEquipment: number | null;

  @Column("int", { name: "super_category", nullable: true })
  superCategory: number | null;

  @Column("int", { name: "user", nullable: true })
  user: number | null;

  @Column("tinyint", { name: "isActual", nullable: true, width: 1 })
  isActual: boolean | null;

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
