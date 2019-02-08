import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {FindManyOptions, Like} from "typeorm";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {validate, ValidationError} from "class-validator";

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly _usuarioService:UsuarioService){
    }

    @Get('inicio')
    async mostrarUsuario(
        @Res() res,
        @Session() sesion,
        @Query('accion') accion:string,
        @Query('nombre') nombre:string,
        @Query('busqueda') busqueda:string
    ){
        if(sesion.rol==='administrador') {
            let mensaje = undefined;
            console.log(sesion)

            if (accion && nombre) {
                switch (accion) {
                    case 'actualizar':
                        mensaje = `Rol al usuario ${nombre} actualizado`;
                        break;
                    case 'borrar':
                        mensaje = `Registro ${nombre} eliminado`;
                        break;
                }
            }

            let usuarios: UsuarioEntity[];

            if (busqueda) {

                const consulta: FindManyOptions<UsuarioEntity> = {
                    where: [
                        {
                            nombre: Like(`%${busqueda}%`)
                        },
                        {
                            correo: Like(`%${busqueda}%`)
                        },
                    ]
                };

                usuarios = await this._usuarioService.buscar(consulta);
            } else {

                usuarios = await this._usuarioService.buscar();
            }

            res.render('lista-usuario',
                {
                    arregloUsuario: usuarios,
                    mensaje: mensaje,

                })
        }else{
            throw new BadRequestException({mensaje: "No tiene acceso a esta vista"});
        }
    }

    @Post('borrar/:idUsuario')
    async borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioEncontrado = await this._usuarioService
            .buscarPorId(+idUsuario);

        await this._usuarioService.borrar(Number(idUsuario));

        const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre}`;

        response.redirect('/usuario/inicio' + parametrosConsulta);
    }

    @Get('crear-usuario')
    async mostrarCrearUsuario(
        @Res() res,
        @Query('error') error: string
    ){

        let mensaje = undefined;

        if(error){
            mensaje = error;
        }

        res.render('crear-usuario',{
            mensaje:mensaje
        })
    }

    @Post('crear-usuario')
    async crearUsuarioFuncion(
        @Res() res,
        @Body() datosUsuario
    ) {

        let mensaje = undefined;

        const objetoValidacionUsuario = new CreateUsuarioDto();

        objetoValidacionUsuario.username = datosUsuario.username
        objetoValidacionUsuario.password = datosUsuario.password;
        objetoValidacionUsuario.nombre = datosUsuario.nombre
        objetoValidacionUsuario.apellido = datosUsuario.apellido
        objetoValidacionUsuario.correo = datosUsuario.correo;
        objetoValidacionUsuario.fotoUsuario = datosUsuario.fotoUsuario;

        const errores: ValidationError[] =
            await validate(objetoValidacionUsuario) // Me devuelve un arreglo de validacion de errores

        let listaErrores= []

        errores.forEach((error)=>{
            listaErrores.push(error.constraints["matches"])
            listaErrores.push(error.constraints["isNotEmpty"])
        })
        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores)

            const parametrosConsulta = `?error=${listaErrores}`;

            res.redirect('/usuario/crear-usuario' + parametrosConsulta)
        } else {

            const respuesta = await this._usuarioService.crear(datosUsuario)
            res.render('login')
        }
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