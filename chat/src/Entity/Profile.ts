import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./User";

@Entity()
export   class Profile  {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @OneToOne(() => User, user => user.profile) 
    user: User;

  

}
