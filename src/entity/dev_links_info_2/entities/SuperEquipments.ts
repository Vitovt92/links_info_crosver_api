import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("super_equipments", { schema: "dev_links_info_2" })
export class SuperEquipments {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "equipment_model", nullable: true })
  equipmentModel: number | null;

  @Column("int", { name: "equipment_type", nullable: true })
  equipmentType: number | null;

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

  @Column("tinyint", { name: "isActual", nullable: true, width: 1 })
  isActual: boolean | null;
}
