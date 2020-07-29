import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categoty_comments__super_categories", { schema: "dev_links_info_2" })
export class CategotyCommentsSuperCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "categoty_comment_id", nullable: true })
  categotyCommentId: number | null;

  @Column("int", { name: "super-category_id", nullable: true })
  superCategoryId: number | null;
}
