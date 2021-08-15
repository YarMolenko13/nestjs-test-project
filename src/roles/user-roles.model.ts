import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {Role} from "./roles.model";

interface UserRolesCreationAttrs {
    user_id: number
    role_id: number
}

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles, UserRolesCreationAttrs>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, allowNull: false})
    roleId: number

}