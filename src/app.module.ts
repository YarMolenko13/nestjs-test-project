import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'chunee.db.elephantsql.com',
            port: 5432,
            username: 'oepazbat',
            password: 'ZYK7d10nBR8tJinc8C6VmWLL6D5tuRDj',
            database: 'oepazbat',
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        ConfigModule.forRoot({
            // envFilePath: `.${process.env.NODE_ENV}.env`
            envFilePath: `.env`
        }),
        // SequelizeModule.forRoot({
        //     dialect: 'postgres',
        //     host: 'postgres',
        //     port: Number(process.env.POSTGRES_PORT),
        //     username: process.env.POSTGRES_USERNAME,
        //     password: process.env.POSTGRES_PASSWORD,
        //     database: process.env.POSTGRES_DATABASE,
        //     models: [User, Role, UserRoles, Post],
        //     autoLoadModels: true
        // }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule {

}