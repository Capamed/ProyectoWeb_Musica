import {IsDateString, IsNotEmpty} from "class-validator";

export class CreateDescargasDto {

    @IsDateString({message: '// Fecha de descarga no debe ser anterior a la fecha actual //'})
    @IsNotEmpty({message: '// Campo Fecha de descarga no debe estar vacío //'})
    fecha_descarga: string;
    
}