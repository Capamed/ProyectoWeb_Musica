import {IsNotEmpty, Matches} from "class-validator";

export class CreateAlbumDto {

    @IsNotEmpty({message: '// Campo nombre de álbum no debe estar vacío //'})
    @Matches(/^([a-z ñáéíóú]{2,60})$/i,{message:'// El campo nombre de álbum no debe tener números //'})
    nombreAlbum: string;

}