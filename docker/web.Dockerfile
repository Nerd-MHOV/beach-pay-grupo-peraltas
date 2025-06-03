FROM node:20-alpine

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN apk add --no-cache openssl
RUN pnpm install --filter @beach-pay/database...
RUN pnpm --filter @beach-pay/web db:migrate... 
RUN pnpm install --filter @beach-pay/web...

WORKDIR /app/apps/web

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

CMD ["pnpm", "start"]
