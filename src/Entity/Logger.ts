import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Logger {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    DateLogger: Date;

    @Column()
    Msg: string;

    @Column()
    Method: string;

    @Column()
    Json: string;

    @Column()
    Controller: string;

    @Column()
    Type: string;

}