import {BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";


interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'example@gmail.com', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: '$553mypassword4562', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'true', description: 'Забанен или нет', default: false})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: 'Оскорбления', description: 'Причина блокировки', nullable: true})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    // M to M
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    // O to M
    @HasMany(() => Post)
    posts: Post[]
}