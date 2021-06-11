import csv from 'csv-parser'
import fs from 'fs'
import Config from '../config';


//import createCsvWriter from 'csv-writer'
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

class CsvWriter {

    async writeCsvFile(filePath, headerData, data) {
        var csvWriter = createCsvWriter({
            path: filePath,
            header: headerData
        });

        await csvWriter.writeRecords(data).then(() => console.log('The CSV file was written successfully'))

    }
   
    async createFileInRootDirectory(filePath, fileContent) {
        fs.writeFileSync(filePath, fileContent, (error) => {
            if (error) {
                console.log('An error occured : ' + error);
            } else {
                console.log('File is created ');
            }
        });
    }

    async createFile() {

        var fileExists = fs.existsSync(Config.csvFilePath);
        if (fileExists) {
            fs.unlinkSync(Config.csvFilePath)
            await this.createFileInRootDirectory(Config.csvFilePath, '')

        } else {
            await this.createFileInRootDirectory(Config.csvFilePath, '')
        }

    }


}

export default new CsvWriter()