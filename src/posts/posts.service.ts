import {Injectable, UnauthorizedException} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {JwtService} from "@nestjs/jwt";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private filesService: FilesService,
                private jwtService: JwtService) {
    }

    async create(dto: CreatePostDto, token: any, image: any) {
        if (!token.token) {
            throw new UnauthorizedException('Пользователь не авторизован')
        }
        const user = this.jwtService.verify(token.token)
        const userId: number = user.id

        const fileName = await this.filesService.createFile(image)

        const post = await this.postRepository.create({...dto, userId, image: fileName})
        return post
    }
}
