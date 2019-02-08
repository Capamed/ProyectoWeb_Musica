import { Controller } from "@nestjs/common";
import { CancionService } from "./cancion.service";


@Controller('cancion')

export class CancionController {
    constructor(private readonly _cancionService:CancionService,
        ){}
    }