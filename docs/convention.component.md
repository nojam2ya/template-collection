# 🧱 React 컴포넌트 작성 컨벤션

컴포넌트는 모두 대문자로 시작하는 디렉토리 내에 `index.tsx` 파일 또는 `index.ts` 엔트리 파일에서 export되는 컴포넌트 파일 내에 구현되어야 합니다.

```tsx
const Component: React.FC<ComponentProps> = (props) => {
    return <div></div>
}

export default Component;
```

컴포넌트는 모두 `const`에 할당된 화살표 함수로 구현되어야 합니다.

`const`를 통해 할당되는 이유:

- 타입 정의의 용이성
- 외부의 변형 차단

짧은 로직은 컴포넌트 파일에서 작성할 수 있지만  
최대한 로직은 커스텀 훅으로 UI와 분리하기를 권장합니다.

```tsx
import {useSomeFunction} from './useComponent.ts'

const Component = () => {
    useSomeFunction()
    return <div></div>
}
export default Component;
```

컴포넌트는 기본적으로 `export default` 방식으로 외부에 노출합니다.  
이외의 `export`는 같은 파일 내에서는 하지 않으며, 필요한 경우는 **파일을 분리하거나 네임스페이스 패턴을 사용**해 주세요.

1. Name space 패턴 방식
2. 파일 분리(+ Private 파일 패턴)

### Name space

`export`하고자 하는 요소를 컴포넌트의 네임 스페이스에 할당하는 방법입니다.

- 네임스페이스 패턴은 `Form.Input`, `Form.Textarea`처럼 **맥락이 명확한 UI 묶음**에만 사용합니다.
- 서브 컴포넌트가 독립된 의미를 가진다면 별도 분리하는 것이 바람직합니다.

```tsx
import React, {ReactNode} from 'react';

// props 타입 정의
interface FormProps {
    children: ReactNode;
}

// 서브 컴포넌트 타입
const Input = () => <input/>;
const Textarea = () => <textarea/>;

// Form 타입 확장 (static 속성 포함)
interface FormComponent extends React.FC<FormProps> {
    Input: typeof Input;
    Textarea: typeof Textarea;
}

// Form 컴포넌트 정의
const Form: FormComponent = ({children}) => {
    return <form>{children}</form>;
};

// 네임스페이스처럼 속성 할당
Form.Input = Input;
Form.Textarea = Textarea;

export default Form;
```

### 파일 분리(+ Private 파일 패턴)

만약 컴포넌트에서 사용 중인 `constants`를 외부에서 사용하게 된다면

```ts
// Component.constants.ts
export const SOMETHING = 'something';
```

위와 같이 파일을 따로 나누는 것을 권장합니다.

만약, `constants`의 일부는 컴포넌트에서만 사용하고 일부는 `export`해야하는 상황이라면  
Private 파일 패턴과 Public API 패턴을 고려하세요.

> 파일명이 `_`로 시작하는 경우(`_constants.ts`)는 해당 파일이 **내부 구현 전용**임을 의미합니다.  
> 외부에는 직접 import하지 않으며, 필요한 경우 `index.ts`를 통해 노출합니다.

- `index.tsx`는 해당 컴포넌트의 **구현 파일**로 사용됩니다.
- `index.ts`는 여러 내부 파일을 외부에 노출하는 **엔트리 포인트**로 사용됩니다.
- 동일한 폴더 내에 두 파일이 함께 존재하는 경우, `index.tsx`는 컴포넌트 자체, `index.ts`는 `export {}` 집합체입니다.

```ts
// _Component.constants.ts
export const INTERNAL_SOMETHING = 'internal';
export const EXTERNAL_SOMETHING = 'external';
```

```ts
// index.ts(엔트리 파일)
export {default} from './Component.tsx' // 컴포넌트 구현 파일
export {EXTERNAL_SOMETHING as SOMETHING} from './Component.constants.ts'
```