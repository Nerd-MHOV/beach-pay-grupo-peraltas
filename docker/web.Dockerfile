FROM node:20-alpine

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --filter @beach-pay/web...

WORKDIR /app/apps/web

ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build

CMD ["pnpm", "start"]
