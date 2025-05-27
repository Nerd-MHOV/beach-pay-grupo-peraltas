import { User } from '@beach-pay/database/generated/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


type SignInInputDto = {
    username: string;
    password: string;
};
type SignInOutputDto = Omit<
    User, "passwd" | "created_at" | "updated_at" | "teacher_id"
>;
type AuthReturnDto = {
    access_token: string;
    username: string;
    id: string;
}


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async authenticate(input: SignInInputDto): Promise<AuthReturnDto> {
        const user = await this.validateUser(input);
        if (!user) {
            throw new UnauthorizedException();
        }
        return {
            access_token: 'fake-access-token',
            id: user.id,
            username: user.user,
        }
    }

    async validateUser(data: SignInInputDto): Promise<SignInOutputDto | null> {
        const { username, password } = data;
        const user = await this.usersService.user({ user: username });
        if (user && user.passwd === password) {
            return {
                id: user.id,
                user: user.user,
                role: user.role,
                name: user.name,
                email: user.email,
            };
        }
        return null;
    }
}
