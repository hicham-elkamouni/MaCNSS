import { Schema, model } from "mongoose";
import { IRessource } from "@interfaces/index";

const schema = new Schema<IRessource>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        class : {
            type: String,
            required: true,
            trim: true,
        },
        price : {
            type: Number,
            required: true,
        },
        repaymentRate : {
            type: Number,
            required: true,
        },
        refundable : {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

export const Ressource = model<IRessource>("Ressource", schema);