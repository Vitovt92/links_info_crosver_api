//import {
//  Entity,
//  Column,
//  PrimaryGeneratedColumn,
//  CreateDateColumn,
//  UpdateDateColumn,
//  OneToMany,
//} from "typeorm";
//
////import { Crosver_Photos } from "./Crosver_Photos";
//
//@Entity()
//export class Crosver_tables {
//  @PrimaryGeneratedColumn()
//  id: number;
//
//  @Column()
//  crosverLocation: string;
//
//  @Column("text")
//  crosverDocks: string;
//
//  @Column("text")
//  crosverComments: string;
//
//  @Column()
//  lat: string;
//
//  @Column()
//  lng: string;
//
//  @CreateDateColumn({ name: "createdAt" })
//  createdAt: Date;
//
//  @UpdateDateColumn({ name: "updatedAt" })
//  updatedAt: Date;
//
//  // @OneToMany(
//  //   (type) => Crosver_Photos,
//  //   (crosver_Photos) => crosver_Photos.crosver_tables
//  // )
//  // crosver_Photos: Crosver_Photos[];
//}
