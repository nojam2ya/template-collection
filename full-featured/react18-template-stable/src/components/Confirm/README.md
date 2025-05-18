# Confirm 컴포넌트 사용 가이드

---

## 📌 구조

```text
Confirm
├─ index.ts            # 모듈 진입점. export 정리
├─ _Confirm.tsx        # Confirm 컴포넌트
├─ _Confirm.types.ts   # 타입 정의
├─ _Confirm.styles.ts  # 스타일
├─ _useConfirm.ts      # hook
├─ confirmAtom.ts      # Jotai 상태
└─ README.md           # 사용법
```

* jotai 설치 필요 `npm i jotai`

<br/>

## 💡 사용법

### 1️⃣ 기본 설정

1. `Confirm` 디렉토리를 사용하려는 프로젝트에 복사 붙여넣기를 합니다.(components 디렉토리 하위를 추천)
2. `App.tsx` 파일에 `Confirm` 컴포넌트를 `import`합니다.

```tsx
import Confirm from '@components/Confirm';

function App() {
    return (
        // ...
        <Confirm/>
    );
}

export default App;
```

### 2️⃣ 사용

#### alert

1. `useConfirm`을 `import` 하고

```tsx
import {useConfirm} from 'Confirm디렉토리위치/Confirm';
```

2. `alert`과 `async`을 이용하여 handler 함수를 만든다.

```tsx
import {useConfirm} from 'Confirm디렉토리위치/Confirm';

const Component = () => {
    const {alert} = useConfirm();

    const openAlertHandler = async () => {
        const cancel = await alert({
            title: '타이틀', // string
            children: '내용', // string 또는 JSX (Optional)
        })

        // 만약, alert 창이 닫아진 후 실행되어야 하는 기능이 있다면,
        if (cancel) {
            // alert 창이 닫아진 후 실행되는 로직
        }
    }

    return <button onClick={openAlertHandler}>Confirm Button</button>;
}

export default Component;
```

<br/>

#### confirm

1. `useConfirm`을 `import` 하고

```tsx
import {useConfirm} from 'Confirm디렉토리위치/Confirm';
``` 

2. `confirm`과 `async`을 이용하여 handler 함수를 만든다.

```tsx
import {useConfirm} from 'Confirm디렉토리위치/Confirm';

const Component = () => {
    const {confirm} = useConfirm();

    const openConfirmHandler = async () => {
        const ok = await confirm({
            title: '타이틀', // string
            children: '내용', // string 또는 JSX (Optional)
        })

        if (ok) {
            // OK를 클릭 시, 실행되는 로직
        } else {
            // CANCEL을 클릭 시, 실행되는 로직
        }
    }

    return <button onClick={openConfirmHandler}>Confirm Button</button>;
}

export default Component;
```

<br/>

### 🚨 주의사항

* confirm
    * 확인: `true` return
    * 취소: `false` return
* alert
    * 닫기: `true` return