import { Module } from "@nestjs/common";
import { CancionEntity } from "./cancion.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CancionController } from "./cancion.controller";
import { CancionService } from "./cancion.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([CancionEntity])],
        controllers:[CancionController],
        providers:[CancionService],
        exports:[CancionService]
    }
)

export class CancionModule {
    
}