import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { DescargasEntity } from "./descargas.entity";

@Injectable()

export class DescargasService {
    constructor(
        @InjectRepository(DescargasEntity)
        private readonly _descargasRepository:Repository<DescargasEntity>
    ){
    }
}