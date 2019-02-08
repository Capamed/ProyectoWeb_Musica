import {IsNotEmpty, Matches} from "class-validator";

export class CreateAutorDto {

    @IsNotEmpty({message: '// Campo nombre del autor no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo nombre del autor no debe tener números //'})
    nombreAutor: string;

    @IsNotEmpty({message: '// Campo apellido del autor no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo apellido del autor no debe tener números //'})
    apellidoAutor: string;

}