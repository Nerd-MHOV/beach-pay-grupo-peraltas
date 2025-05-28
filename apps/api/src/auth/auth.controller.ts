import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { AuthService } from './auth.service';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { Public } from './decorators/public.decorator';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user.id, req.user.username, req.user.role);
    }

    @Get("protected")
    getAll(@Request() req) {
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
