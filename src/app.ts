import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());

const getController = (req: Request, res: Response) => {
  res.send("E-commerce app");
};

app.get("/", getController);

// console.log(process.cwd());

export default app;
