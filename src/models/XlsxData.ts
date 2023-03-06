import XLSX from 'xlsx';

export class XlsxData {
    private content:unknown[]
    constructor(path:Buffer) {
        const workbook = XLSX.read(path);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        this.content = jsonData;
    }

    public getContent = () => this.content;
}