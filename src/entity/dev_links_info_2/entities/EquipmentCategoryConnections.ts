import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipment_category_connections", { schema: "dev_links_info_2" })
export class EquipmentCategoryConnections {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "super_category", nullable: true })
  superCategory: number | null;

  @Column("int", { name: "super_equipment", nullable: true })
  superEquipment: number | null;

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
