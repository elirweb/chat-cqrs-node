import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Situation {

    @Column()
    Name:string;

    @PrimaryGeneratedColumn("uuid")
    id:string;
}