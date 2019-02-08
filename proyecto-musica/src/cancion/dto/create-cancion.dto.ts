import {IsInt, IsNotEmpty, Matches, Max, Min} from "class-validator";

export class CreateCancionDto {

    @IsNotEmpty({message: '// Campo nombre canción no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo nombre canción no debe tener números //'})
    nombreCancion: string;

    @IsNotEmpty({message: '// Campo año canción no debe estar vacío //'})
    @IsInt({message: '// Campo año canción acepta solo números //'})
    @Min(1900)
    @Max(2018)
    anoCancion: number;

    @IsNotEmpty({message: '// Campo descripción de la canción no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo descripción de la canción no debe tener números //'})
    descripcionCancion: string;

    @IsNotEmpty({message: '// Campo idioma canción no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo idioma canción no debe tener números //'})
    idiomaCancion: string;

    @IsNotEmpty({message: '// Campo link de la canción no debe estar vacío //'})
    linkCancion: string;


    @IsNotEmpty({message: '// Campo foto de canción no debe estar vacío //'})
    fotoCancion: string;
}