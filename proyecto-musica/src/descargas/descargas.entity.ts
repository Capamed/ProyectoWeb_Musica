import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { UsuarioEntity } from "src/usuario/usuario.entity";
import { CancionEntity } from "src/cancion/cancion.entity";

@Entity()

export class DescargasEntity{

    @PrimaryGeneratedColumn()
    idDescargas?:number;

    @Column({
        name: "fecha_descarga",
        type: "date"
    })
    fecha_descarga: Date

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.descargas
    )
    usuario: UsuarioEntity;


    @ManyToOne(
        type => CancionEntity,
        cancion=>cancion.descargas
    )
    cancion:CancionEntity;
}