import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { Profile } from "./Profile";
import { Sex } from "./Sex";

@Entity()
export class User extends Aggregation {
    @Column()
    Name: string;

    @Column()
    Login: string;

    @Column()
    Password: string;

    @Column()
    Document: string;
   
    @Column()
    Photo: string;

    @OneToOne(() => Sex)
    @JoinColumn()
    IdSex: Sex;

    @Column()
    Mail: string;
    
    @Column()
    Mail2: string;
    
    @OneToOne(() => Profile)
    @JoinColumn()
    IdProfile: Profile;

}
