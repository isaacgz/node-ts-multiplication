import fs from 'fs';
import { yarg } from './plugins/args.plugin';

const { b:base, l:limit, s:showTable } = yarg;

let data = `===========================================\n`;
data += `               Tabla del ${base}\n`;
data += `===========================================\n\n`;


if(showTable)
    console.log(data);    

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFile(`${ outputPath }/tabla-${ base }.txt`, data, () => {

});
