# Modal System (Zustand × React 19)

드래그 가능하고 겹쳐서 띄울 수 있는 멀티 모달 컴포넌트 세트입니다.<br/>
Zustand로 전역 상태를 관리하고, `react-draggable`로 위치를 제어하며, `@loadable/component`로 실제 모달 콘텐츠를 지연 로딩합니다.

---

## 💪 핵심 기능

| 기능            | 설명                                                               | 
|---------------|------------------------------------------------------------------|
| **다중 모달**     | 전역 `modals` 배열에 원하는 개수만큼 추가·제거                                   |
| **드래그 & 포커스** | `ModalFactory` 내부에서 드래그 후 위치 고정, 클릭 시 최상단으로 이동                   |
| **Escape 닫기** | `useModalEvent` 훅이 최상단 모달을 자동으로 닫음                               |
| **타입 안전**     | `modalMap` → `ModalPropsMap` → `Modal` 유틸 타입으로 모달별 `props` 타입 연결 |
| **지연 로딩**     | `@loadable/component` 도입—첫 렌더 지연 최소화                             |
| **센터/임의 위치**  | `getCenterPosition` (유틸) 또는 `$defaultPosition` 지정                |

---

## 📦 필요 패키지 설치

```bash
npm i zustand @loadable/component react-draggable
# 또는
pnpm add zustand @loadable/component react-draggable
```

---

# ⚙️ 빠른 시작

1. `<div id="modal-root" />`준비 <br/>
   `index.html` `<body>` 안에 가장 아래쪽에 추가합니다.

```html

<body>
<div id="root"></div>
<div id="modal-root"></div>
</body>
```

2. 앱 루트에 `ModalRoot` 마운트

```tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import ModalRoot from '@/Component/Modal/_ModalRoot';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ModalRoot/>
    </>,
);
```

3. 모달 정의 (`_modalMap.ts`)

```ts
import loadable from '@loadable/component';
import type {UserProfileModalProps} from '@/sample/UserProfileModal';

export const modalMap = {
    USER_PROFILE: {
        title: '사용자 프로필',
        component: loadable(() => import('@/sample/UserProfileModal')) as React.ComponentType<UserProfileModalProps>,
    },
} as const;
```

4. 모달 열기

```tsx
import {useModal} from '@/Component/Modal/_useModal';

const Example = () => {
    const {openModal} = useModal();

    return (
        <button
            onClick={() =>
                openModal({
                    id: 'user-profile-42',
                    type: 'USER_PROFILE',
                    props: {userId: 42},
                    $width: 480,
                    $height: 320,
                })
            }
        >
            프로필 보기
        </button>
    );
};
```

---

## 🎯 API

### `useModalStore` (Zustand)

| Key                   | Type                   | 설명              |
|-----------------------|------------------------|-----------------|
| modals                | Modal[]                | 현재 열린 모달 배열(스택) |
| openModal(modal)      | (modal: Modal) => void | 중복 id 방지 후 push |
| closeModal(id)        | (id: string) => void   | 해당 모달 제거        |
| bringModalToFront(id) | (id: string) => void   | z‑index 재정렬     |

### `useModal`

```ts
const {openModal, closeModal} = useModal();
```

렌더링 트리 어디서든 호출 가능—컴포넌트 prop 드릴링 불필요.

### `useModalEvent`

- Escape 키 감지 → 스택 최상단 모달 close
- 앞으로 확장 가능(예: 전역 단축키)

---

## 📌 구조

```
Modal/
├── index.ts                         # 모듈 엔트리 포인트 (외부 노출용)
├── _Modal.types.ts                 # 공통 타입 정의
├── _modalMap.ts                    # 모달 type-to-component 매핑
├── _ModalRoot.tsx                  # 모달을 루트에 렌더링하는 컴포넌트
├── _modalStore.ts                  # 모달 상태 관리용 전역 store
├── _useModal.ts                    # 모달 제어를 위한 커스텀 훅
└── _ModalFactory/
    ├── index.tsx                   # 팩토리 메인 컴포넌트
    ├── ModalFactory.styles.ts      # 스타일 정의
    ├── ModalFactory.types.ts       # 팩토리 전용 타입
    ├── ModalFactoryHeader.tsx      # 공통 헤더 (드래그 핸들 포함 등)
    └── useModalFactory.ts          # 팩토리 내부 상태 및 이벤트 핸들러
```

---

## 📝 커스텀 가이드

| Custom Point   | 방법                                          |
|----------------|---------------------------------------------|
| **사이즈**        | `openModal({ $width, $height })`            |
| **초기 위치**      | `openModal({ $defaultPosition: { x, y } })` |
| **z‑index 기준** | `_ModalRoot.tsx`에서 `1000 + index` 부분 수정     |
| **테마/스타일**     | `ModalFactory.styles.ts` 또는 Header 컴포넌트 교체  |

---

## 💡 FAQ

| 질문                        | 답변                                                 |
|---------------------------|----------------------------------------------------|
| 동일 `id`로 두 번 호출하면?        | 두 번째 호출은 무시됩니다.                                    |
| 모달 내부에서 다른 모달을 열 수 있나요?   | 가능합니다. 단, 재귀 호출에 주의하세요.                            |
| Redux 등 다른 스토어로 바꿀 수 있나요? | 상태 인터페이스만 맞추면 가능합니다만, 전역 atom ↔ 컴포넌트 간 의존성을 고려하세요. |
