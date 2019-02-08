import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CancionEntity } from "src/cancion/cancion.entity";

@Entity('album')

export class AlbumEntity {

    @PrimaryGeneratedColumn()
    idAlbum: number;

    @Column({
        name:"nombreAlbum",
        type:"varchar",
        length:40
    })
    nombreAlbum: string;


    @OneToMany(
        type => CancionEntity,
        cancion=> cancion.album

    )
    canciones: CancionEntity[];

}