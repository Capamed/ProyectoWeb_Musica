import {Controller, Get, Param, Query, Body, Post, Res, Session} from "@nestjs/common";
import { RolPorUsuarioService } from "./rol-por-usuario.service";



@Controller('rol-por-usuario')

export class RolPorUsuarioController {
    constructor( private readonly _rolPorUsuarioService: RolPorUsuarioService,
               ){

    }
}