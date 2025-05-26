# Confirm 컴포넌트 사용 가이드

사용자 액션에 대한 Alert / Confirm UI를 제공하는 전역 모달 시스템입니다. Jotai 상태 기반으로 작동하며, 비동기 호출을 통해 Promise 형태로 사용자 응답을 받을 수 있습니다.

---

## 📌 디렉토리 구조

```text
src/components/Confirm
├─ index.ts # 모듈 진입점
├─ _ConfirmRoot.tsx # Confirm 렌더링 루트 컴포넌트
├─ _Confirm.types.ts # 타입 정의
├─ _Confirm.styles.ts # 스타일 정의
├─ _useConfirm.ts # Confirm 훅
├─ confirmAtom.ts # 전역 상태 정의
└─ README.md # 사용법 안내 (본 문서)

```

※ Jotai 사용: `npm i jotai`

---

## 💡 사용법

### 1️⃣ 프로젝트에 설정

1. `Confirm` 디렉토리를 복사하여 프로젝트 `components` 경로에 추가합니다.
2. `App.tsx`에 다음과 같이 `Confirm`을 import 및 렌더링합니다:

```tsx
import Confirm from '@components/Confirm';

function App() {
    return (
        <>
            {/* ...기타 컴포넌트 */}
            <Confirm/>
        </>
    );
}

```

※ Confirm은 전역에서 동작해야 하므로 앱 루트에 선언해야 합니다.

### 2️⃣ Alert 사용 예시

```tsx
import {_useConfirm} from '@components/Confirm';

const Component = () => {
    const {alert} = _useConfirm();

    const handleClick = async () => {
        const closed = await alert({
            title: '알림',
            children: '작업이 완료되었습니다.',
        });

        if (closed) {
            // Alert 창이 닫힌 후 로직
        }
    };

    return <button onClick={handleClick}>Alert 열기</button>;
};
```

### 3️⃣ Confirm 사용 예시

```tsx
import {_useConfirm} from '@components/Confirm';

const Component = () => {
    const {confirm} = _useConfirm();

    const handleClick = async () => {
        const result = await confirm({
            title: '삭제 확인',
            children: '정말 삭제하시겠습니까?',
        });

        if (result) {
            // OK 클릭 시 로직
        } else {
            // CANCEL 클릭 시 로직
        }
    };

    return <button onClick={handleClick}>Confirm 열기</button>;
};
```

---

## 🚨 주의사항

- alert: 닫기 시 true 반환
- confirm: 확인 시 true, 취소 시 false 반환
- 여러 Confirm 중첩 사용 시, 이전 confirm은 자동 취소되지 않으므로 사용자 경험 고려 필요

---

## 📦 의존성

- react
- jotai

