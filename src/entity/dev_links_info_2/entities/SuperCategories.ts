import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("super_categories", { schema: "dev_links_info_2" })
export class SuperCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

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
