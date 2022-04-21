import dotenv from "dotenv";
import express, { Response, Request } from "express";
import { connectDB } from '@config/database';
import compression from "compression";
import { limiter } from "@middlewares/limiter";
import { agentRouter } from '@routes/index';
import helmet from "helmet";

const app = express();
// change default environment path
dotenv.config({ path: "./.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(limiter);

const port = process.env.PORT || 3000;
const host = process.env.APP_HOSTNAME || "localhost";
const url = process.env.APP_URL || `http://${host}:${port}`;

// All routes should live here
app.use('/api/agent', agentRouter);

// listen to port
app.listen(port, async () => {

  // connect to database
  const { connection } = await connectDB();
  console.log(`👋 Connected to database successfully: ${connection.name}`);
  console.log(`🚀 Server ready at: ${url}`);

});
