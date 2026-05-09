# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처 개요

**Next.js 15 App Router** 기반 프로젝트. `src/app/` 디렉토리가 라우팅의 기준점.

**레이아웃 구조**: `src/app/layout.tsx`가 전체 앱을 `ThemeProvider`(next-themes)로 감싸고, `Header` → `main` → `Footer` 순서로 렌더링. Header와 Footer는 `src/components/layout/`에 위치.

**테마 시스템**: CSS 변수 방식으로 `src/app/globals.css`에 `:root`(라이트)와 `.dark`(다크) 토큰 정의. oklch 색공간 사용. `tailwind.config` 파일 없이 `@import "tailwindcss"` 한 줄로 Tailwind v4 설정 완료.

**컴포넌트 체계**:
- `src/components/ui/` — shadcn/ui 컴포넌트 (New York 스타일, neutral 베이스 컬러)
- `src/components/layout/` — Header, Footer 등 레이아웃 전용 컴포넌트
- `src/lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)

**경로 별칭**: `@/`가 `src/`를 가리킴 (tsconfig.json 설정).

**shadcn/ui 설정**: `components.json` 기준으로 RSC 활성화, lucide-react 아이콘, CSS 변수 기반 테마.
