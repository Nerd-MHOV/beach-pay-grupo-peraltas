import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@beach-pay/database/generated/prisma';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';
@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,

        @Inject(refreshConfig.KEY)
        private readonly refreshTokenConfig: ConfigType<typeof refreshConfig>,
    ) { }

    async validateLocalUser(username: string, password: string) {
        const user = await this.userService.user({
            user: username,
        })
        if (!user)
            throw new UnauthorizedException('Usuário ou Senha não conferem');
        const isPasswordMatched = await compare(password, user.passwd);
        if (!isPasswordMatched)
            throw new UnauthorizedException('Usuário ou Senha não conferem');

        return {
            id: user.id,
            role: user.role,
            username: user.user,
        }

    }

    async login(userId: string, name: string, role: UserRole) {
        const { accessToken, refreshToken } = await this.generateToken(userId);
        return {
            id: userId,
            name,
            role,
            accessToken,
            refreshToken,
        }
    }

    async generateToken(userId: string) {
        const payload = { sub: userId };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload),
            this.jwtService.signAsync(payload, this.refreshTokenConfig)
        ])

        return {
            accessToken,
            refreshToken
        }
    }

    async validateJwtUser(userId: string) {
        const user = await this.userService.user({
            id: userId,
        });
        if (!user)
            throw new UnauthorizedException('Usuário não encontrado');

        return {
            id: user.id
        }
    }

    async validateRegreshToken(userId: string) {
        const user = await this.userService.user({
            id: userId,
        });
        if (!user)
            throw new UnauthorizedException('Usuário não encontrado');

        return {
            id: user.id
        }
    }

    async refreshToken(userId: string, name: string, role: UserRole) {

        const { accessToken, refreshToken } = await this.generateToken(userId);
        return {
            id: userId,
            name,
            role,
            accessToken,
            refreshToken
        };
    }
}
