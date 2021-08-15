import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    createPost(token: any, dto: CreatePostDto, image: any): Promise<import("./posts.model").Post>;
}
