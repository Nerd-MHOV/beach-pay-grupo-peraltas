import { Controller, Get, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { AuthService } from './auth.service';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { CaslService } from 'src/casl/casl.service';
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly abilityService: CaslService
    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user.id, req.user.username, req.user.role);
    }

    @Roles('admin')
    @Get("protected")
    getAll(@Request() req) {
        const ability = this.abilityService.ability
        if (!ability.can('read', 'all')) throw new UnauthorizedException("Não autorizado");
        return "Protected route. This is your user id: " + req.user.id;
    }

    @UseGuards(RefreshAuthGuard)
    @Post("refresh")
    async refreshToken(@Request() req) {
        return this.authService.refreshToken(req.user.id, req.user.username, req.user.role);
    }

    @Post("logout")
    async signOut(@Request() req) {
        return this.authService.signOut(req.user.id);
    }
}
