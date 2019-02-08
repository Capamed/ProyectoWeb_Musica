import { Injectable } from "@nestjs/common";
import { AlbumEntity } from "./album.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()

export class AlbumService {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly _albumRepository:Repository<AlbumEntity>
    ){

    }

}