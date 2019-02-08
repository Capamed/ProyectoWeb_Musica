import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";


@Entity('autor')

export class AutorEntity {
    @PrimaryGeneratedColumn()
    idAutor: number;

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
}