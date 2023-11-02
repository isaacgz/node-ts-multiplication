
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {


    constructor(){}

    execute({ base,limit = 10}: CreateTableOptions) {
        let data = ``;
        for (let index = 1; index <= limit; index++) {    
            data += `${base} x ${index} = ${base * index}\n`;
        }

        return data;
    }
}