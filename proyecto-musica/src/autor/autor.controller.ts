import {Controller} from "@nestjs/common";
import {AutorService} from "./autor.service";

@Controller('autor')

export class AutorController {
    constructor(private readonly _autorService:AutorService){}


}

export interface Autor {

    idAutor: number;
    nombreAutor: string;
    apellidoAutor: string;
}
