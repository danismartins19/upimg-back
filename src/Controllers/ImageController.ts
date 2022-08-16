import { Request, Response } from "express";

export const addImage = async (req: Request, res: Response) => {
    let { img } = req.body;
    console.log(img);
}

export const getImage = async (req: Request, res: Response) => {
    console.log('')
}