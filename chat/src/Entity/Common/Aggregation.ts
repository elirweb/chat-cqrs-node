import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Situation } from "../Situation";

@Entity()
export abstract class Aggregation{

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @OneToOne(() => Situation)
    @JoinColumn()
    IdSituation: Situation;

    @CreateDateColumn()
    CreateDate: Date;

    @CreateDateColumn()
    ModifyDate: Date;

    @Column()
    Hours: string;

}