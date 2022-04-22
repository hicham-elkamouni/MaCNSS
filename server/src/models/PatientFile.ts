import mongoose, { Schema, model } from "mongoose";
import { IPatientFile } from "@interfaces/index";

const schema = new Schema<IPatientFile>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        content: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ressource',
        }],
    },
    { timestamps: true }
);

export const Ressource = model<IPatientFile>("PatientFile", schema);