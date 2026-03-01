# -------- builder --------
FROM node:20-alpine3.17 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci

COPY . .

ENV SKIP_ENV_VALIDATION=1
ENV NEXTAUTH_URL=https://www.sijar.tech

RUN npx prisma generate
RUN npm run build

# -------- runner --------
FROM node:20-alpine3.17

WORKDIR /app
ENV NODE_ENV=production
ENV SKIP_ENV_VALIDATION=1

RUN addgroup -S app && adduser -S app -G app

COPY --from=builder /app ./

USER app

EXPOSE 3000

CMD ["npm","run","start"]