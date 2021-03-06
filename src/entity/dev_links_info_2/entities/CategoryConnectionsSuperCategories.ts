import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category_connections__super_categories", {
  schema: "dev_links_info_2",
})
export class CategoryConnectionsSuperCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "category_connection_id", nullable: true })
  categoryConnectionId: number | null;

  @Column("int", { name: "super-category_id", nullable: true })
  superCategoryId: number | null;
}
