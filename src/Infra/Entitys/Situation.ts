import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Segment } from "./Segment";
import User from "./User";


@Entity()
export default class Situation {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    Name:string;

    @OneToOne(() => User, user => user.situation) 
    user: User;

    @OneToOne(() => Product, prod => prod.situation) 
    situation: Product;

    @OneToOne(() => Segment, seg => seg.situation) 
    segment: Segment;

}