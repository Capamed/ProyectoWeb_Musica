import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {AutorEntity} from "./autor.entity";
import {AutorController} from "./autor.controller";
import {AutorService} from "./autor.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([AutorEntity])],
        controllers:[AutorController],
        providers:[AutorService],
        exports:[AutorService]
    }
)

export class AutorModule {
    
}
