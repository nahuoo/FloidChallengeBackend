import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { FloidApiController } from './api/api.controller';
var cors = require('cors');
dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json())
app.post('/get', async (req: Request, res: Response) => {
  const FloidApi = new FloidApiController()
  res.json(await FloidApi.accountList(req.body))
});

app.listen(port, () => {
  console.log(`💻[server]: server is running at https://localhost:${port} 😎`);
})
