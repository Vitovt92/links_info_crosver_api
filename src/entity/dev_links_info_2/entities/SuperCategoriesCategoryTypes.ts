import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("super_categories__category_types", { schema: "dev_links_info_2" })
export class SuperCategoriesCategoryTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "super_category_id", nullable: true })
  superCategoryId: number | null;

  @Column("int", { name: "category-type_id", nullable: true })
  categoryTypeId: number | null;
}
