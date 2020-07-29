import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("locations", { schema: "dev_links_info_2" })
export class Locations {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("double", { name: "lat", nullable: true, precision: 22 })
  lat: number | null;

  @Column("double", { name: "lng", nullable: true, precision: 22 })
  lng: number | null;

  @Column("int", { name: "location_type", nullable: true })
  locationType: number | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

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
