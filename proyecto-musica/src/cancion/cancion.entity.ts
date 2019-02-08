import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('cancion')

export class CancionEntity {
    @PrimaryGeneratedColumn()
    idDisco: number;

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
        autor => autor.discos
    )
    autor:AutorEntity



    @ManyToOne(
        type =>GeneroEntity ,
        genero => genero.discos
    )

    genero:GeneroEntity





}