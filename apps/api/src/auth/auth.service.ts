import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@beach-pay/database';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';
import { CaslService } from 'src/casl/casl.service';
import { packRules } from '@casl/ability/extra';
@Injectable()
export class AuthService {


    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly abilityService: CaslService,

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
            name: user.name,
        }

    }

    async login(userId: string, name: string, role: UserRole) {
        const { accessToken, refreshToken } = await this.generateToken(userId, role);
        await this.userService.updateRefreshToken(userId, refreshToken);
        return {
            id: userId,
            name,
            role,
            accessToken,
            refreshToken,
        }
    }

    async generateToken(userId: string, role: UserRole) {
        const user = await this.userService.user({ id: userId });
        const ability = user ? this.abilityService.createForUser(user).rules : [];
        const payload = {
            sub: userId,
            role,
            permissions: packRules(ability),
        };
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
            id: user.id,
            role: user.role,
        }
    }

    async validateRefreshToken(userId: string, refreshToken: string) {
        const user = await this.userService.user({ id: userId });
        if (!user) throw new UnauthorizedException('Usuário não encontrado');
        const refreshTokenMatched = await compare(refreshToken, user.hashed_refresh_token);
        if (!refreshTokenMatched) throw new UnauthorizedException('Refresh token inválido');
        return { id: user.id }
    }

    async refreshToken(userId: string, name: string, role: UserRole) {
        const { accessToken, refreshToken } = await this.generateToken(userId, role);
        await this.userService.updateRefreshToken(userId, refreshToken);
        return {
            id: userId,
            name,
            role,
            accessToken,
            refreshToken
        };
    }

    async signOut(userId: string) {
        return await this.userService.updateRefreshToken(userId, null);
    }
}
