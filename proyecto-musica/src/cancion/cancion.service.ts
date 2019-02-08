import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CancionEntity } from "./cancion.entity";

@Injectable()

export class CancionService {
    constructor(
        @InjectRepository(CancionEntity)
        private readonly _cancionRepository:Repository<CancionEntity>
    ){
    }
}