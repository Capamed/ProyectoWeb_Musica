import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DescargasController } from "./descargas.controller";
import { DescargasService } from "./descargas.service";
import { DescargasEntity } from "./descargas.entity";

@Module(
    {

        imports:[TypeOrmModule.forFeature([DescargasEntity])],
        controllers:[DescargasController],
        providers:[DescargasService],
        exports:[DescargasService],
    }
)

export class DescargasModule{

}
