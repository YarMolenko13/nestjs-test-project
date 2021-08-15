import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/user.model";


interface PostCreationAttrs {
    title: string
    content: string
    image: string
    userId: number
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: true})
    title: string

    @Column({type: DataType.STRING, allowNull: true})
    content: string

    @Column({type: DataType.STRING, defaultValue: false})
    image: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    // O to M
    @BelongsTo(() => User)
    author: User

}