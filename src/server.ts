import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import homeRoutes from './Routes/homeRoutes';
import viewRoutes from './Routes/viewRoutes';

dotenv.config()

const server = express()

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json({limit: '25mb'}))
server.use(express.urlencoded({ extended: true , limit: '25mb'}));

server.use(homeRoutes)
server.use('/view', viewRoutes)

server.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})