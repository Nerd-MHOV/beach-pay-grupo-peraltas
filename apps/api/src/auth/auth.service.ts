import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcryptjs';
@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

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
}
