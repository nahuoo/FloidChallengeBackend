import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('express')
})

app.listen(port, () => {
  console.log(`💻[server]: server is running at https://localhost:${port} 😎`);
})
