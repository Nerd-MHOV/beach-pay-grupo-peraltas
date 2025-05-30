import { Injectable, Scope } from '@nestjs/common';
import { AbilityBuilder, PureAbility } from '@casl/ability';
import { Subjects } from '@casl/prisma';
import { createPrismaAbility, PrismaQuery, accessibleBy } from './casl-prisma';
import { Investment, User, UserRole } from '@beach-pay/database';

export type PermActions = 'create' | 'read' | 'update' | 'delete' | 'manage';

export type PermissionResource = Subjects<{
    User: User;
    Investment: Investment;
}> | "all";

export type AppAbility = PureAbility<[PermActions, PermissionResource], PrismaQuery>;

export type DefinePermissions = (
    user: User,
    builder: AbilityBuilder<AppAbility>,
) => void;

const rolePermissionsMap: Record<UserRole, DefinePermissions> = {
    admin: (user, { can }) => {
        can('manage', 'all');
    },
    operational: (user, { can }) => {
        can("manage", 'User', {
            OR: [
                { id: user.id },
                { role: 'teacher' },
            ]
        });
        can('manage', 'Investment', {
            investment_type: {
                can_see: {
                    has: user.role,
                }
            }
        })
    },
    teacher: (user, { can }) => {
        can("read", 'User', { id: user.id });
    },
}

@Injectable({ scope: Scope.DEFAULT })
export class CaslService {
    ability: AppAbility;
    accessibleBy = accessibleBy;

    createForUser(user: User) {
        const builder = new AbilityBuilder<AppAbility>(createPrismaAbility);
        rolePermissionsMap[user.role](user, builder);
        this.ability = builder.build()
        return this.ability;
    }
}
