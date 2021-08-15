import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Должен быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string

    @IsString({message: 'Должен быть строкой'})
    @ApiProperty({example: '$553mypassword4562', description: 'Пароль'})
    @Length(5, 20, { message: 'Не меньше 5 и не больше 20'})
    readonly password: string
}