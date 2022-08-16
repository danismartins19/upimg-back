import { Request, Response } from "express";

export const addImage = async (req: Request, res: Response) => {
    let data = req.body;
    console.log(data);
}

export const getImage = async (req: Request, res: Response) => {
    console.log('')
}