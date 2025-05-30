import { User } from "@beach-pay/database";
import { IsEmail, IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto implements Partial<CreateUserDto> { }