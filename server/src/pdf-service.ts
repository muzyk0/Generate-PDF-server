import * as puppeteer from 'puppeteer'

const localStorageToken = {"updateToken":""}

class PdfService {

    async generatePdf() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.evaluateOnNewDocument(
            token => {
                localStorage.clear();
                localStorage.setItem('authData', token);
            }, JSON.stringify(localStorageToken));

        await page.goto('http://localhost:3000', {
            waitUntil: 'networkidle0',
        });

        // await page.emulateMedia('screen');
        const pdfBuffer = await page.pdf({
            // path: './react.pdf', // path (relative to CWD) to save the PDF to.
            printBackground: true,// print background colors
            width: '1440px', // match the css width and height we set for our PDF
            height: '792px',
        });
        await browser.close();


        return pdfBuffer
    }
}

export const pdfService = new PdfService()