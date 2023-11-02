import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-fila.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestinatioon: string;
}


export class ServerApp{


    static run({base, limit, showTable, fileName, fileDestinatioon}: RunOptions) {
        console.log('Server running...');
        const table     = new CreateTable().execute({base,limit});
        const wasCreated  = new SaveFile()
                            .execute({ 
                                fileContent:table,
                                fileName: fileName,
                                fileDestination: fileDestinatioon,
                            });

        if( showTable) console.log(table);
        
        (wasCreated)
            ? console.log('File Created')
            : console.log('File not created');
            
    }
}