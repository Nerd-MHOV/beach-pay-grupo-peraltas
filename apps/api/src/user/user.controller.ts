/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, ConflictException, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getUsers() {
        return await this.usersService.users({
            omit: {
                passwd: true,
            }
        });

    }

    @Get(":id")
    async getUser(@Param('id') id: string) {
        const user = await this.usersService.user({ id });
        if (!user) throw new Error("Usuário não encontrado");
        const { passwd, ...rest } = user || {};
        return rest;
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: string) {
        const user = await this.usersService.user({ id });
        if (!user) throw new Error("Usuário não encontrado");
        const { passwd, ...rest } = await this.usersService.deleteUser({ id });
        return rest;
    }

    @Post("create")
    async createUser(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.user({ user: createUserDto.user });
        if (user) throw new ConflictException("Usuário já existe");
        const { passwd, ...rest } = await this.usersService.createUser(createUserDto);
        return rest;
    }
}
