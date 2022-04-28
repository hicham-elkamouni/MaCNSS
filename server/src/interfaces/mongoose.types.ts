import { Document } from "mongoose";

export interface IAgent extends Document {
    userName: string;
    email: string;
    hashed_password: string;
    salt: string;
    authenticate: Function;
    createdAt:Date
    updatedAt:Date
}

export interface IPatient extends Document {
    reference: string;
    hashed_password: string;
    salt: string;
    authenticate: Function;
    createdAt:Date
    updatedAt:Date
}

export interface IRessource extends Document {
    type: string;
    name : string;
    class : string;
    price : number;
    refundable : boolean;
    repaymentRate : number;
    createdAt:Date
    updatedAt:Date
}

export interface IPatientFile extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: Number;
    address: string;
    city: string;
    immatriculation : string
    content: Object 
}