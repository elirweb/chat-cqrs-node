import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./User";

@Entity()
export  default class Gender  {

    @PrimaryGeneratedColumn("uuid")
    id:string;
    
    @Column()
    Name: string;

    @OneToOne(() => User, user => user.gender) 
    user: User;

}
