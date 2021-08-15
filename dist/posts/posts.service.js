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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
const jwt_1 = require("@nestjs/jwt");
const files_service_1 = require("../files/files.service");
let PostsService = class PostsService {
    constructor(postRepository, filesService, jwtService) {
        this.postRepository = postRepository;
        this.filesService = filesService;
        this.jwtService = jwtService;
    }
    async create(dto, token, image) {
        if (!token.token) {
            throw new common_1.UnauthorizedException('Пользователь не авторизован');
        }
        const user = this.jwtService.verify(token.token);
        const userId = user.id;
        const fileName = await this.filesService.createFile(image);
        const post = await this.postRepository.create(Object.assign(Object.assign({}, dto), { userId, image: fileName }));
        return post;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(posts_model_1.Post)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService,
        jwt_1.JwtService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map