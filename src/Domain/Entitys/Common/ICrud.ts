import { UpdateResult } from "chat/node_modules/typeorm";
import { promises } from "dns";
import { Observable } from "rxjs/internal/Observable";

export interface ICrud<T>{
    Add(obj:T):T
    Update(obj: T,param:any):Promise<UpdateResult>
    List(page: any):Promise<T[]>
    Find(id: number): Promise<T>
  
}