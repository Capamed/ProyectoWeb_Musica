import {IsNotEmpty, Matches} from "class-validator";

export class CreateGeneroDto {

    @IsNotEmpty({message: '// Campo nombre de género no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo nombre género no debe tener números //'})
    nombreGenero: string;

}