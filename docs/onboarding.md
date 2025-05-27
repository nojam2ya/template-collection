# ✈️ Onboarding Guide

해당 문서는 아래의 컨벤션 규칙에 따라 프론트엔드 개발자로 참여하시는 분들이 빠르게 구조를 이해하고,  
컨벤션에 따라 작업을 시작할 수 있도록 돕기 위한 가이드입니다.

---

## 🗂️ 프로젝트 구조 요약

> 구조 전체를 기억할 필요는 없습니다. 아래의 기준을 먼저 생각해주세요.

| 역할                    | 구조                            |
|-----------------------|-------------------------------| 
| 공통 UI 컴포넌트            | `components/`                 |
| 도메인 기능/페이지            | `features/`                   |
| API 요청 함수             | `apis/` (순수 요청만 정의, 응답 가공 금지) |
| 전역 커스텀 훅              | `hooks/`                      
| 전역상태관리(jotai/zustand) | `infra/atoms`, `infra/stores` 
| 라우트 설정/관련 컴포넌트        | `infra/router/`               |

상세 컨벤션 문서: [프로젝트 컨벤션 보기](convention.directory.md)

---

## 🚀 시작 가이드 (Setup)

1. 레포지토리 클론 또는 해당 프로젝트 직접 복사 후 사용

2. 의존성 설치

```bash
pnpm install # pnpm 사용 시
npm install # npm 사용 시
yarn install # yarn 사용 시
```

3. 개발 서버 실행

```bash
pnpm run dev # pnpm 사용 시
npm run dev # npm 사용 시
yarn run dev # yarn 사용 시
```

❗ 만약, `run dev`가 실행되지 않는다면 `package.json` 파일의 `"scripts"` 항목을 확인해주세요.

> 현재 템플릿 프로젝트는 pnpm 관리로 맞추어져 있습니다.  
> 다른 관리 도구를 사용한다면 `pnpm-lock.yaml` 파일을 삭제해주세요.

---

## 🧩 폴더 생성 시 이름 컨벤션

- 모든 컴포넌트 폴더명은 PascalCase (예: `SomeComponent/`)
- 파일명 접미어는 `.types.ts`, `.styles.ts`, `.test.tsx` 등 기능별로 분리

---

## 🦮 컴포넌트/훅 작성 가이드

| 작업 항목     | 폴더 위치                                        | 작성 방식 요약                                               |
|-----------|----------------------------------------------|--------------------------------------------------------|
| UI 컴포넌트   | `components/SomeComp/`                       | `index.tsx`, `.types.ts`, `.styles.ts` 필수              |
| 도메인 페이지   | `features/user/pages/`                       | route 경로 기준으로 폴더 구성                                    |
| 커스텀 훅     | `hooks/` or `features/SomeFeature/useXXX.ts` | 단일 훅은 default export 가능,  <br/> 여러 개면 반드시 named export |
| API 요청 함수 | `apis/`                                      | axios 요청만 정의 (응답 가공은 훅에서)                              |

상세 컨벤션 문서:

- [컴포넌트 컨벤션 보기](convention.component.md)
- [훅 컨벤션 보기](convention.hook.md)

---

## 🧪 테스트 작성 규칙

- 파일명은 항상 Component.test.tsx, useXxx.test.ts로 작성
- 컴포넌트는 UI 스냅샷 및 이벤트 테스트 중심
- 훅은 상태 변화, side effect 중심 테스트

---

## 💡 기타 팁 및 주의사항

- `export`는 항상 `named export`를 기본으로 합니다. (트리쉐이킹 대응)
    - 단, 컴포넌트는 `default`로 `export` 해주세요.
- 전역 상태는 반드시 `infra/atoms`, `infra/stores` 아래에 위치시켜 주세요.
- context API 사용 시 컴포넌트의 하위의 별도 폴더에 `provider`/`context` 분리하여 구조화해주세요.
- CSS는 tailwind 또는 styled-components 중 템플릿 기준을 따르세요. (혼합 사용은 비권장)

---

## 🚫 금지 사항

- 같은 로직을 여러 위치에서 복붙하지 말고 `utils/` 또는 `hooks/`로 분리
- `features/` 내부에서 전역 상태 정의 금지 (필요 시 `infra/atoms` 이동)
- 페이지 컴포넌트 내에서 직접 axios 호출 금지 (반드시 훅 또는 `apis/` 사용)