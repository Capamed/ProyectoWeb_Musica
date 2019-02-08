import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}