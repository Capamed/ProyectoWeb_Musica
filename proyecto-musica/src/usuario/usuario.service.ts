import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm"

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>
    ){

    }
}