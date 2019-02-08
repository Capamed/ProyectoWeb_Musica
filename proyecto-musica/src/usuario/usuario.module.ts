import { Module } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([UsuarioEntity])],
        controllers:[UsuarioController],
        providers:[UsuarioService],
        exports: [UsuarioService]
    }
)

export class UsuarioModule{

}