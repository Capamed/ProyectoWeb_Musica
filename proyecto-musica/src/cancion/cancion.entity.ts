import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { GeneroEntity } from "src/genero/genero.entity";
import { AutorEntity } from "src/autor/autor.entity";
import { AlbumEntity } from "src/album/album.entity";
import { type } from "os";
import { DescargasEntity } from "src/descargas/descargas.entity";

@Entity('cancion')

export class CancionEntity {
    @PrimaryGeneratedColumn()
    idCancion?: number;

    @Column({
        name:"nombreCancion",
        type:"varchar",
        length:40
    })
    nombreCancion: string;

    @Column({
        name:"anoCancion",
        type:"int",
    })
    anoCancion: number;

    @Column({
        name:"descripcionCancion",
        type:"varchar",
        length:40
    })
    descripcionCancion: string;

    @Column({
        name:"idiomaCancion",
        type:"varchar",
        length:40
    })
    idiomaCancion: string;

    @Column({
        name:"linkCancion",
        type:"varchar",
    })
    linkCancion: string;

    @Column({
        name:"fotoCancion",
        type:"varchar",
    })
    fotoCancion: string;


    @ManyToOne(
        type =>AutorEntity,
        autor => autor.canciones
    )
    autor:AutorEntity

    @ManyToOne(
        type =>AlbumEntity,
        album => album.canciones
    )
    album:AlbumEntity

    @ManyToOne(
        type =>GeneroEntity,
        genero => genero.canciones
    )

    genero:GeneroEntity

    @OneToMany(
        type => DescargasEntity,
        descarga => descarga.cancion
    )
    descargas: DescargasEntity[];
}