import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./posts.model";
import { JwtService } from "@nestjs/jwt";
import { FilesService } from "../files/files.service";
export declare class PostsService {
    private postRepository;
    private filesService;
    private jwtService;
    constructor(postRepository: typeof Post, filesService: FilesService, jwtService: JwtService);
    create(dto: CreatePostDto, token: any, image: any): Promise<Post>;
}
