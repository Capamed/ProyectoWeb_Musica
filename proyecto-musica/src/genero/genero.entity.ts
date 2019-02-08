import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { CancionEntity } from "src/cancion/cancion.entity";

@Entity('genero')

export class GeneroEntity {

    @PrimaryGeneratedColumn()
    idGenero?: number;

    @Column({
        name:"nombreGenero",
        type:"varchar",
        length:40
    })
    nombreGenero: string;

    @OneToMany(
        type => CancionEntity,
        cancion=>cancion.genero
    )

    canciones: CancionEntity[];

}