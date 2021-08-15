import { UsersService } from "./users.service";
import { User } from "./user.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    banUser(dto: BanUserDto): Promise<User>;
    deleteUserById(userId: number): Promise<string>;
}
