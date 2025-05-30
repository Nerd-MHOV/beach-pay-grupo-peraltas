/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, ConflictException, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CaslService } from 'src/casl/casl.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly usersService: UserService,
        private readonly abilityService: CaslService,
    ) { }

    @Roles('admin', 'operational')
    @Get()
    async getUsers() {
        const ability = this.abilityService.ability;
        const accessibleBy = this.abilityService.accessibleBy;
        return await this.usersService.users({
            omit: {
                passwd: true,
            },
            where: {
                AND: [accessibleBy(ability, "read").User]
            }
        });
    }


    @Roles('admin', 'operational', 'teacher')
    @Get(":id")
    async getUser(@Param('id') id: string) {
        const ability = this.abilityService.ability;
        const accessibleBy = this.abilityService.accessibleBy;
        const user = await this.usersService.user({
            AND: [
                { id },
                accessibleBy(ability, "read").User
            ]
        });
        if (!user) throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        const { passwd, ...rest } = user || {};
        return rest;
    }

    @Roles('admin', 'operational')
    @Get("teachers")
    async getUserTeachers() {
        const ability = this.abilityService.ability;
        const accessibleBy = this.abilityService.accessibleBy;
        return await this.usersService.users({
            omit: {
                passwd: true,
            },
            where: {
                AND: [
                    { role: "teacher" },
                    { teacher_id: null },
                    accessibleBy(ability, "read").User
                ]
            }
        });
    }

    @Roles('admin', 'operational')
    @Get("teachers/:id")
    async getUserTeacherByID(@Param('id') id: string) {
        const ability = this.abilityService.ability;
        const accessibleBy = this.abilityService.accessibleBy;
        return await this.usersService.users({
            omit: {
                passwd: true,
            },
            where: {
                AND: [
                    { role: "teacher" },
                    { teacher_id: id },
                    accessibleBy(ability, "read").User
                ]
            }
        });
    }

    @Roles('admin')
    @Delete(":id")
    async deleteUser(@Param('id') id: string) {
        const user = await this.usersService.user({ id });
        if (!user) throw new Error("Usuário não encontrado");
        const { passwd, ...rest } = await this.usersService.deleteUser({ id });
        return rest;
    }

    @Roles('admin')
    @Post("")
    async createUser(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.user({ user: createUserDto.user });
        if (user) throw new ConflictException("Usuário já existe");
        const { passwd, ...rest } = await this.usersService.createUser(createUserDto);
        return rest;
    }

    @Roles("admin", "operational")
    @Patch(":id")
    async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
        const ability = this.abilityService.ability;
        const accessibleBy = this.abilityService.accessibleBy;
        const user = await this.usersService.user({
            AND: [
                { id },
                accessibleBy(ability, "update").User
            ]
        });
        if (!user) throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        const { passwd, ...rest } = await this.usersService.updateUser({
            where: { id },
            data
        });
        return rest;
    }
}
