import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

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
}