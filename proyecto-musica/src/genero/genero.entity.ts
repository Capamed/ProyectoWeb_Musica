import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('genero')

export class GeneroEntity {

    @PrimaryGeneratedColumn()
    idGenero: number;

    @Column({
        name:"nombreGenero",
        type:"varchar",
        length:40
    })
    nombreGenero: string;


}