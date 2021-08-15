import { Model } from "sequelize-typescript";
interface UserRolesCreationAttrs {
    user_id: number;
    role_id: number;
}
export declare class UserRoles extends Model<UserRoles, UserRolesCreationAttrs> {
    id: number;
    userId: number;
    roleId: number;
}
export {};
