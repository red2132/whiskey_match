# 1. 베이스 이미지
FROM node:18-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. Next.js 빌드
COPY . . 
RUN npm run build

# 5. 실행 환경 설정
FROM node:18-alpine AS runner

WORKDIR /app

# 6. 빌드 결과와 필요한 파일 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# 7. 의존성 설치 (프로덕션용)
RUN npm install --production

# 8. 포트 노출
EXPOSE 3000

# 9. Next.js 실행
CMD ["npm", "run", "start"]