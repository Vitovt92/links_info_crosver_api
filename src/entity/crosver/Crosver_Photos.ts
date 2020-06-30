//import {
//  Entity,
//  Column,
//  PrimaryGeneratedColumn,
//  CreateDateColumn,
//  UpdateDateColumn,
//  ManyToOne,
//} from "typeorm";
//
//import { Crosver_tables } from "./Crosver";
//
//@Entity()
//export class crosver_Photos {
//  @PrimaryGeneratedColumn()
//  id: number;
//
//  @Column()
//  photoName: string;
//
//  @CreateDateColumn({ name: "createdAt" })
//  createdAt: Date;
//
//  @UpdateDateColumn({ name: "updatedAt" })
//  updatedAt: Date;
//
//  // @ManyToOne(
//  //   (type) => Crosver_tables,
//  //   (crosver_tables) => crosver_tables.crosver_Photos
//  // )
//  // crosver_tables: Crosver_tables;
//}
