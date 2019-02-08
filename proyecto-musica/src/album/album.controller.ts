import { Controller } from "@nestjs/common";
import { AlbumService } from "./album.service";

@Controller('album')

export class AlbumController {
    constructor(private readonly _albumService:AlbumService){}
    
}

export interface Album {

    idAlbum: number;
    nombreAlbum: string;
}