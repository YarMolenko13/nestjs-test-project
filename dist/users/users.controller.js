"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const user_model_1 = require("./user.model");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.getUsers();
    }
    addRole(dto) {
        return this.userService.addRole(dto);
    }
    banUser(dto) {
        return this.userService.banUser(dto);
    }
    deleteUserById(userId) {
        return this.userService.deleteUserById(userId);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Получаем всех пользователей' }),
    swagger_1.ApiResponse({ status: 200, type: [user_model_1.User] }),
    roles_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Выдача ролей' }),
    swagger_1.ApiResponse({ status: 200 }),
    roles_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Post('/role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Блокировка пользователя' }),
    swagger_1.ApiResponse({ status: 200, type: [ban_user_dto_1.BanUserDto] }),
    roles_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Post('/ban'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "banUser", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Удаляем пользователя по id' }),
    common_1.Delete('/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUserById", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map