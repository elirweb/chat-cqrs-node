import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Logger {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @CreateDateColumn()
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
