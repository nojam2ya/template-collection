import { useAtom } from 'jotai';
import { confirmAtom } from './confirmAtom.ts';
import type { UseConfirmFnParams } from './_Confirm.types.ts';

const useConfirm = () => {
  const [, setConfirm] = useAtom(confirmAtom);

  return {
    confirm: ({ title, children }: UseConfirmFnParams) =>
      new Promise(resolve => {
        setConfirm({
          isOpen: true,
          title,
          children,
          onClickOk: () => {
            setConfirm({
              isOpen: false,
              title: '',
              onClickOk: () => {},
            }); // 상태 초기화
            resolve(true); // ok 버튼 클릭 시, true 반환
          },
          onClickCancel: () => {
            setConfirm({
              isOpen: false,
              title: '',
              onClickOk: () => {},
            }); // 상태 초기화
            resolve(false); // cancel 버튼 클릭 시, false 반환
          },
        });
      }),
    alert: ({ title, children }: UseConfirmFnParams) =>
      new Promise(resolve =>
        setConfirm({
          isOpen: true,
          title,
          children,
          onClickOk: () => {
            setConfirm({
              isOpen: false,
              title: '',
              onClickOk: () => {},
            }); // 상태 초기화
            resolve(true); // cancel 버튼 클릭 시, true 반환
          },
        }),
      ),
  };
};

export default useConfirm;
