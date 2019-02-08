import { Controller } from "@nestjs/common";
import { DescargasService } from "./descargas.service";

@Controller()

export class DescargasController{
    constructor(private readonly _descargasService:DescargasService,
        ){}
}

export interface Descargas {

    idDescargas?:number;
    fecha_descarga: String;
}