FROM node:20-alpine

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --filter @beach-pay/api...
RUN pnpm db:generate

WORKDIR /app/apps/api

RUN pnpm build

CMD ["pnpm", "start"]
