import * as crypto from "crypto";

export class Password {
    private Pass:string;
  
    constructor(pass:string) {
        if(pass.length >6)
            this.Pass = this.HashPassword(pass);
        else 
            this.Pass = "";

    }

     HashPassword(pass:string){
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex')
                .slice(0,16); 
    };
}