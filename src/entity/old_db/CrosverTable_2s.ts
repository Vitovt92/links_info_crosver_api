import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crosver_table_2s", { schema: "dev_linksdb" })
export class CrosverTable_2s {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "crosverLocation", nullable: true, length: 255 })
  crosverLocation: string | null;

  @Column("text", { name: "crosverDocks", nullable: true })
  crosverDocks: string | null;

  @Column("text", { name: "crosverComments", nullable: true })
  crosverComments: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
