import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Situation } from "../Situation";
import "reflect-metadata";

export abstract class Aggregation{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @OneToOne(() => Situation)
    @JoinColumn()
    IdSituation: Situation;

    @Column()
    CreateDate: Date;

    @Column()
    ModifyDate: Date;

    @Column()
    Hours: string;

}