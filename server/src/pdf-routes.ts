import express, {Request, Response} from "express";
import {pdfService} from "./pdf-service";

export const pdfRoute = express.Router()

pdfRoute.get('/', async ( req: Request, res: Response) => {
    const result = await pdfService.generatePdf()
    res.set("Content-Type", "application/pdf");
    res.status(200).send(result)
})