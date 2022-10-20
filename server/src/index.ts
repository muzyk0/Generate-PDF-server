import express, {Express} from 'express';
import {pdfRoute} from "./pdf-routes";

const PORT = 5000

const app: Express = express()

app.use(express.json())
app.use('/pdf',pdfRoute)

app.listen(PORT, () => {
    console.log('Started in: ' + PORT)
})
