import {IsNotEmpty, IsString, Matches} from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty({message: '// Campo nickname no debe estar vacío //'})
    @IsString({message:'// Campo nickname acepta carácteres y letras'})
    username: string;


    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
        ,{message: '// Contraseña al menos debe tener Mayuscula, Minuscula, Numeros, caracteres especial (8-16) //'})
    @IsNotEmpty({message: '// Campo password no debe estar vacío //'})
    password:string;


    @IsNotEmpty({message: '// Campo nombre no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message: '// campo nombre no debe tener números //'})
    nombre:string;


    @IsNotEmpty({message: '// Campo apellido no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message: '// campo apellido no debe tener números //'})
    apellido:string;


    @IsNotEmpty({message: '// Campo correo no debe estar vacío //'})
    @Matches(/[\w]+@{1}[\w]+\.[a-z]{2,3}/,{message: '// El correo debe tener @_____.com //'})
    correo:string;

    @IsNotEmpty({message: '// Campo foto de usuario no debe estar vacío //'})
    fotoUsuario: string;

}