import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("model_props", { schema: "dev_links_info_2" })
export class ModelProps {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("int", { name: "model_attribute", nullable: true })
  modelAttribute: number | null;

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
