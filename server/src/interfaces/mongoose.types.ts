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
