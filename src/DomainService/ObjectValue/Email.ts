import { exception } from "console";

export class Email {

    private Address: string;
   
    constructor(address:string) {
      if(this.validateEmail(address))
        this.Address = address;
    else {
        this.Address = "";
    }
}
    validateEmail(email : string) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}