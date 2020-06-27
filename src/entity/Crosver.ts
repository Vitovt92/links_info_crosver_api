import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Crosver_tables {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  crosverLocation: string;

  @Column("text")
  crosverDocks: string;

  @Column("text")
  crosverComments: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;
}
