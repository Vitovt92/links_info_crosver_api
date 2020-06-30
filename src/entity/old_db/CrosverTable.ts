import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crosver_table", { schema: "dev_linksdb" })
export class CrosverTable {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "crosverLocation", nullable: true, length: 40 })
  crosverLocation: string | null;

  @Column("varchar", { name: "crosverDocks", nullable: true, length: 40 })
  crosverDocks: string | null;

  @Column("varchar", { name: "crosverComments", nullable: true, length: 255 })
  crosverComments: string | null;
}
