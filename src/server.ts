import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const server = express()

server.use(cors({origin: "*"}))

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})