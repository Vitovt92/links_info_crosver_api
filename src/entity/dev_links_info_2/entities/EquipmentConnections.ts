import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipment_connections", { schema: "dev_links_info_2" })
export class EquipmentConnections {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "super_equipment", nullable: true })
  superEquipment: number | null;

  @Column("int", { name: "super_equipment_2", nullable: true })
  superEquipment_2: number | null;

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
