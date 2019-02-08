import {Body, Controller, Get, Post, Query, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario/usuario.service";
import {RolPorUsuarioService} from "./rol-por-usuario/rol-por-usuario.service";
import {validate, ValidationError} from "class-validator";
import {CreateLoginDto} from "./dto/create-login.dto";

@Controller()
export class AppController {
    constructor(private readonly _appService: AppService,
                private readonly _usuarioService: UsuarioService,
                private readonly _rolPorUsuarioService: RolPorUsuarioService) {

    }

    @Get('home')
    mostrarHome(
        @Res() res
    ){
        res.render('home')
    }

    @Get('login')
    mostrarLogin(
        @Res() res,
        @Query("mensaje") mensajeObtenido,
        @Query('error') error: string
    ) {
        let mensaje = undefined;
        let clase = undefined;

        if(error){
            mensaje = error;
            clase = 'alert alert-danger'
        }

        let mensajeVerificacion=undefined;
        if(mensajeObtenido){
            mensajeVerificacion=mensajeObtenido;
        }
        res.render('login', {mensajeVerificacion: mensajeVerificacion, mensaje:mensaje, clase:clase})
    }

    @Post('login')
    async metodoLogin(
        @Body('correo') correo: string,
        @Body('password') password: string,
        @Res() res,
        @Session() sesion,

    ) {

        let mensaje = undefined;

        const objetoValidacionLogin = new CreateLoginDto();
        objetoValidacionLogin.correo = correo;
        objetoValidacionLogin.password = password;

        const errores: ValidationError[] =
            await validate(objetoValidacionLogin) // Me devuelve un arreglo de validacion de errores

        let listaErrores= []

        errores.forEach((error)=>{
            listaErrores.push(error.constraints["matches"])
            listaErrores.push(error.constraints["isNotEmpty"])

        })
        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores)

            const parametrosConsulta = `?error=${listaErrores}`;

            res.redirect('/login/' + parametrosConsulta)

        } else {

            const autenticacion = await this._usuarioService.autenticar(correo, password)

            if (autenticacion) {
                const idUsuario = autenticacion.idUsuario;
                const rolUsuario = await this._rolPorUsuarioService.verificarRol(+idUsuario)

                if (rolUsuario) {
                    const nombreRol = rolUsuario.rol.nombreRol
                    sesion.rol = nombreRol
                    sesion.correo = correo;
                    sesion.idUsuario = idUsuario;
                    // console.log(sesion)
                    switch (nombreRol) {
                        case 'usuario':
                            res.redirect('paciente/paciente')
                            break;
                        case 'administrador':
                            res.redirect('usuario/inicio')
                            break;
                        default:
                            res.send('Aun no se ha asignado una tarea para este rol')

                    }
                } else {

                    res.redirect('/login?mensaje=espere estamos verificando sus datos')
                    //res.send('sin rol')
                    //throw new BadRequestException({mensaje: 'Espere estamos verificando sus datos'})

                }
            }else{
                res.redirect('/login')
            }
        }
    }

    @Get('logout')
    async logout(
        @Res() res,
        @Session() sesion,
    )
    {

        sesion.usuario = undefined;
        sesion.destroy()
        res.redirect('login')
    }

}
