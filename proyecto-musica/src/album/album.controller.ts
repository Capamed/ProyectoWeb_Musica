import { Controller } from "@nestjs/common";

@Controller('album')

export class AlbumController {
    constructor(private readonly _albumService:AlbumService){}
    
}