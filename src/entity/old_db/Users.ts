import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "dev_linksdb" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
