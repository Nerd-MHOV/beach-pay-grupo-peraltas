import { UserRole } from '@beach-pay/database';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { CaslService } from 'src/casl/casl.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private abilityService: CaslService,
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles required, allow access
    }

    const user = context.switchToHttp().getRequest().user;
    this.abilityService.createForUser(user);

    const hasRequiredRole = requiredRoles.some(role => user.role === role);
    return hasRequiredRole;
  }
}
