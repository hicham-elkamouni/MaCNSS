import { Document } from "mongoose";

export interface IAgent extends Document {
    userName: string;
    email: string;
    hashed_password: string;
    createdAt:Date
    updatedAt:Date
}
