import Express from 'express';
import { XlsxData } from './models/XlsxData';
import multer from "multer";
import cors from 'cors';

const app = Express().use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (request, response) => response.json("Hello World!"));
app.post('/upload', upload.single('file'), (request, response) => {    
    return response.json(request.file ? new XlsxData(request.file.buffer).getContent() : "error!");
});
app.listen(process.env.PORT || 4000);
console.log(`Running at ${process.env.PORT || 4000}`);