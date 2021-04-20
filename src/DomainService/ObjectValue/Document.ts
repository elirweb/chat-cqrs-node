export class Document {
    private Code :string;
    constructor(code:string){
        if(code.length > 0)
            this.Code = code;
        else 
            this.Code = "";
        }
}