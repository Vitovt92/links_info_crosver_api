import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum PhotoType {
  CROSVER = "crosver",
  PRESENCE = "presence",
}

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: PhotoType,
  })
  type: PhotoType;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;
}
