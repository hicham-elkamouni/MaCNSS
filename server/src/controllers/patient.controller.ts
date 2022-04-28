// import { RequestHandler } from 'express';
// import { PatientFile } from "@models/PatientFile";
// import { v4 as uuidv4 } from 'uuid';


// // login patient
// export const loginPatient: RequestHandler = async (req, res) => {
//     console.log("inside loginPatient");
//     const {
//         email,
//         password
//     } = req.body;

//     try {
//         const doc = await PatientFile.findOne({ email })
//         if (!doc) {
//             return res.status(404).json({
//                 isLogged: false,
//                 error: 'User not Found with this email'
//             })
//         }
//         if (!doc.authenticate(password)) {
//             return res.status(404).json({
//                 isLogged: false,
//                 error: 'Email and Password dont Match !'
//             })
//         }
//         const token = createToken(doc, "PATIENT");
//         res.cookie('token', token, { expires: new Date(Date.now() + 4 * 3600000) })
//         return token
//             ? res.status(200).json({ isLogged: true, token })
//             : res.status(500).json({ isLogged: false, error: "cant create token" });

//     } catch (e) {
//         res.status(400).json({
//             status: false,
//             message: e.message
//         });
//     }

// }