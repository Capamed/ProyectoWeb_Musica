import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { RolPorUsuarioEntity } from "src/rol-por-usuario/rol-por-usuario.entity";

@Entity('usuario')

export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({
        name:"username",
        type: "varchar",
        length: 30,    
    })
    username: string;

    @Column({
            name:"password",
            type: "varchar",
            length: 16,    
    })
    password: string;

    @Column({
        name:"nombre",
        type: "varchar",
        length: 30,    
    })
    nombre:string;

    @Column({
        name:"apellido",
        type: "varchar",
        length: 30,    
    })
    apellido:string;

    @Column({
        name: "correo",
        type: "varchar",
        length: 50
    })
    correo: string;

@Column({
    name:"fotoUsuario",
    type:"varchar",
    })
    fotoUsuario: string;

    @OneToMany(
        type => RolPorUsuarioEntity,
        rolPorUsuario => rolPorUsuario.usuario
    )
        rolesPorUsuario:  RolPorUsuarioEntity[];
}