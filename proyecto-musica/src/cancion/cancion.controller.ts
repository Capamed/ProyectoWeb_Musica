import { Controller } from "@nestjs/common";
import { CancionService } from "./cancion.service";


@Controller('cancion')

export class CancionController {
    constructor(private readonly _cancionService:CancionService,
    ){}
}

export interface Cancion {

    idCancion: number;
    nombreCancion: string;
    anoCancion: number;
    descripcionCancion: string;
    idiomaCancion: string;
    linkCancion: string;
    fotoCancion: string;
}