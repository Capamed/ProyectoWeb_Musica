import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AlbumEntity} from "./album/album.entity";
import {AutorEntity} from "./autor/autor.entity";
import {CancionEntity} from "./cancion/cancion.entity";
import {GeneroEntity} from "./genero/genero.entity";
import {RolEntity} from "./rol/rol.entity";
import {RolPorUsuarioEntity} from "./rol-por-usuario/rol-por-usuario.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {AlbumModule} from "./album/album.module";
import {AutorModule} from "./autor/autor.module";
import {GeneroModule} from "./genero/genero.module";
import {RolModule} from "./rol/rol.module";
import {RolPorUsuarioModule} from "./rol-por-usuario/rol-por-usuario.module";
import {UsuarioModule} from "./usuario/usuario.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 32771,
            username: 'david',
            password: '12345',
            database: 'proyecto-web',
            // BDD Ya existe -> synchronized: false
            synchronize: true,
            dropSchema: false, //borra la base y se vuelve a crear, buena idea para pruebas pero no para produccion
            entities:[
                AlbumEntity,AutorEntity,CancionEntity,GeneroEntity,RolEntity,RolPorUsuarioEntity,UsuarioEntity
            ],
        }),
        AlbumModule,
        AutorModule,
        GeneroModule,
        RolModule,
        RolPorUsuarioModule,
        UsuarioModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
