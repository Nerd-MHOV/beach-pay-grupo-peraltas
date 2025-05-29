FROM node:20-alpine

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --filter @beach-pay/web...
RUN pnpm db:generate


WORKDIR /app/apps/web

ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build

CMD ["pnpm", "start"]
