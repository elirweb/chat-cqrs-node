import { Column, Entity, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { Product } from "./Product";

@Entity()
export class Category extends Aggregation {

    @Column()
    Name: string;

    @OneToOne(() => Product, prod => prod.category) 
    product: Product;


}