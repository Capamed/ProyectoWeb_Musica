import { Controller } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly _usuarioService:UsuarioService
        ){
        }



        
}

export interface Usuario{
    idUsuario?:number;
    username: string;
    password: string;
    nombre:string;
    apellido:string;
    correo: string;
    fotoUsuario: string;
}