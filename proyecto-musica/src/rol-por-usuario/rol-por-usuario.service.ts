import {Injectable} from "@nestjs/common";
import {FindManyOptions, FindOneOptions, Repository} from "typeorm";
import {RolPorUsuarioEntity} from "./rol-por-usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";



@Injectable()


export class RolPorUsuarioService {
    constructor (
        @InjectRepository(RolPorUsuarioEntity)
        private readonly _rolPorUsuarioRepository: Repository<RolPorUsuarioEntity>){

    }
}