import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult } from 'typeorm';
import { User } from "src/Domain/Entitys/User";
import { InjectRepository } from "@nestjs/typeorm";
import { ICrud } from "src/Domain/Entitys/Common/ICrud";

@Injectable()
export class UserRepository implements ICrud<User>{

    constructor(@InjectRepository(User) private readonly _repository: Repository<User>){}
    Add(obj: User): User {
        return this._repository.create(obj);
    }
    Update(obj: User,param:any):Promise<UpdateResult> {
        return this._repository.update(obj,param);
    }
    List(page: any): Promise<User[]> {
       return this._repository.find(page);
    }
    Find(id: number): Promise<User> {
        return this._repository.findOne(id);
    }
  
   
    
    

    
}