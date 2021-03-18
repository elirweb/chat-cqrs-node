import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import "reflect-metadata";

export abstract class Aggregation{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @CreateDateColumn({name: 'createad_at'})
    CreateDate: Date;

    @UpdateDateColumn({name:'update_at'})
    ModifyDate: Date;

    @Column()
    Hours: string;
    //

}