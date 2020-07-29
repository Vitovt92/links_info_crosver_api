import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("model_attribute_types", { schema: "dev_links_info_2" })
export class ModelAttributeTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "model_attribute", nullable: true })
  modelAttribute: number | null;

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
}
