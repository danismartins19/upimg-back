import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addImage = async (req: Request, res: Response) => {
    let data = req.body;
    
    let image = await prisma.image.create({
        data: {
            image : data.img
        }
    })
    res.json(
        image
    )
}

export const getImage = async (req: Request, res: Response) => {
    let id = req.params.id;
    console.log(id);
}