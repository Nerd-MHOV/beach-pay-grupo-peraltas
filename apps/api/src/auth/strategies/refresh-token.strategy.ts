import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { AuthService } from "../auth.service";
import refreshConfig from "../config/refresh.config";


@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, "refresh-jwt") {
    constructor(
        @Inject(refreshConfig.KEY)
        private readonly refreshTokenConfig: ConfigType<typeof refreshConfig>,
        private readonly authService: AuthService
    ) {
        super({

            jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
            secretOrKey: refreshTokenConfig.secret,
            ignoreExpiration: false,
        })
    }

    validate(payload: AuthJwtPayload) {
        const userId = payload.sub;
        return this.authService.validateRegreshToken(userId)
    }
}