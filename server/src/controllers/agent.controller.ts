import { Agent } from "@models/Agent";
import { createToken } from "@utils/index";
import { Request, RequestHandler, Response } from "express";

export const loginAgent: RequestHandler = async (req : Request, res : Response) => {
    const {
        email,
        password
    } = req.body;

    try {
        const doc = await Agent.findOne({ email })
        if (!doc) {
            return res.status(404).json({
                isLogged: false,
                error: 'User not Found with this email'
            })
        }
        if (!doc.authenticate(password)) {
            return res.status(404).json({
                isLogged: false,
                error: 'Email and Password dont Match !'
            })
        }
        const token = createToken(doc, "AGENT");
        res.cookie('token', token, { expires: new Date(Date.now() + 4 * 3600000) })
        return token
            ? res.status(200).json({ isLogged: true, token, doc })
            : res.status(500).json({ isLogged: false, error: "cant create token" });

    } catch (e: any) {
        res.status(400).json({
            status: false,
            message: e.message
        });
    }

}

export const registerAgent: RequestHandler = async (req : Request, res : Response) => {
    const data = req.body

    try {
        const agent = new Agent(data);
        await agent.save()

        const docs = await Agent.find({});
        console.log(docs);

        res.status(201).json({
            status: true,
            message: { agent }
        })
    } catch (e: any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }

}

