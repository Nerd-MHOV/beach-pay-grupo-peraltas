import { User } from "@beach-pay/database";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    user: string;

    @IsString()
    passwd: string;

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    role: User["role"];

    teacher_id?: string;
}