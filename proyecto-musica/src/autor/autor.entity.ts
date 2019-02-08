import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { CancionEntity } from "src/cancion/cancion.entity";


@Entity('autor')

export class AutorEntity {
    @PrimaryGeneratedColumn()
    idAutor?: number;

    @Column({
        name:"nombreAutor",
        type:"varchar",
        length:40
    })
    nombreAutor: string;

    @Column({
        name:"apellidoAutor",
        type:"varchar",
        length:40
    })
    apellidoAutor: string;


    @OneToMany(
        type =>CancionEntity,
        cancion=> cancion.autor
    )

    canciones: CancionEntity


}