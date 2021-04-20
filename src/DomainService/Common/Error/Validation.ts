import { ValidationError } from "./ValidationError";

export class Validation {
    Error: Array<ValidationError>;


    constructor() {
        this.Error = new Array<ValidationError>();
    }
}