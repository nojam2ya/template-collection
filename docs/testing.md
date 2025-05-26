# 🧪 Test & Linting

```bash
pnpm test         # Jest 기반 테스트 실행(template-react18, template-react19)
pnpm lint         # ESLint 확인
pnpm lint:fix     # 자동 수정
pnpm type-check   # 타입 검사
```

## 🏷️ Test Naming Convention

모든 테스트 파일은 **대상 컴포넌트나 훅과 같은 디렉토리**에 `*.test.ts(x)` 형식으로 작성합니다.

```text
src/
  components/
    Button/
      index.tsx
      Button.styles.ts
      Button.types.ts
      Button.test.tsx      ✅
      useButtons.ts
      useButtons.test.ts   ✅
  hooks/
    useCounter.ts
    useCounter.test.ts     ✅
```

만약 테스트 파일 구조를 변경하려 한다면 `jest.config.ts`파일에서 수정할 수 있습니다.

```ts
// jest.config.ts
export default {
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'], // ✅ 테스트 파일 형식 수정
}
```
