import {BelongsTo, BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
    value: string
    description: string
}

@Table({tableName: 'role'})
export class Role extends Model<Role, RoleCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя', nullable: false})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @ApiProperty({example: 'Может удалять и добавлять посты', description: 'Описание роли пользователя',nullable: false})
    @Column({type: DataType.STRING, allowNull: false})
    description: string

    // M to M
    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}