# 🎣 React 훅 작성 컨벤션

훅은 모두 `use` 접두어를 사용하여 구현합니다.

```ts
// useSomething.ts
export default function useSomething() {
}
```

단일 훅이라면 `default`를 사용해도 괜찮지만,  
여러 훅을 구현한 파일이라면 `default`를 지양하고 `named export`를 사용하세요.

```ts
// useData.ts
export function useData() {
}

export function useFilteredData() {
}

export function useSortedData() {
}
```

---

## 📚 컴포넌트와 훅을 분리하는 조건

- `useEffect`, `useCallback`, `useMemo` 사용하는 경우
    - 컴포넌트 내에 side effect/메모이제이션 로직이 들어간다면 분리
- 전혀 다른 목적의 로직이 두 개 이상인 경우
- 테스트 필요성이 있는 상태 로직인 경우
- 재사용성이 높은 로직인 경우

---

## 🪢 병렬 변수 선언 (Parallel Variable Declaration)

관련 있는 상태나 store 접근값은 한 줄에 병렬로 선언할 수 있습니다.  
단, 의미상 연관 없는 변수는 무조건 줄을 분리하세요.

- ✅ **사용 예시 (관련 상태/로직 병렬 선언)**
  ```ts
  // 관련된 useState들
  const [hour, setHour] = useState(0),
      [minute, setMinute] = useState(0);
  
  // zustand에서 관련 store selector만 병렬 선언
  const value = useMyStore(s => s.value),
      setValue = useMyStore(s => s.setValue);
  ```

- ❌ **지양 예시 (의미 없는 변수 병렬 선언)**

  ```ts
  // ❌ 시간과 모달 여닫기 상태는 관계 없음 → 줄 분리 필요
  const [minute, setMinute] = useState(0), isModalOpen = useModalStore(s => s.isOpen);
  ```

| 규칙                          | 설명                                    |
|-----------------------------|---------------------------------------|
| 관련된 상태/로직은 **한 줄 병렬 선언** 허용 | `value`와 `setValue`, `start`와 `end` 등 |
| 서로 다른 도메인의 상태는 **줄 분리**     | `시간` 상태와 `모달` 상태는 의미 단위가 다름           |
| 선언 수가 많아지면 가독성을 위해 줄바꿈 고려   | 3개 이상이면 한 줄에 몰지 말고 분리                 |
| 타입이 다른 변수 혼합 선언은 지양         | boolean + object 등                    |

---

## 🧪 테스트

- 훅의 테스트는 `useXXX.test.ts` 형식으로, 훅 파일 옆에 위치시킵니다.
- 상태 변화, 리턴 값, side effect에 대한 단위 테스트를 작성합니다.