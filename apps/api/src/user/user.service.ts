import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@beach-pay/database/generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(private readonly db: PrismaService) { }

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.db.user.findUnique({
            where: userWhereUniqueInput,
        })
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput,
        orderBy?: Prisma.UserOrderByWithRelationInput;
        omit?: Prisma.UserOmit
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy, omit } = params;
        return this.db.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            omit
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.db.user.create({
            data: {
                ...data,
                passwd: hashSync(data.passwd, 10),
            },
        });
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;

        return this.db.user.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.db.user.delete({
            where,
        });
    }
}
