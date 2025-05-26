import { ConfirmRoot, useConfirm } from '@components/Confirm';

function App() {
  const { alert, confirm } = useConfirm();
  const handleConfirm = async () => {
    const ok = await confirm({ title: 'Confirm Title', children: 'Confirm Content' });
    if (ok) {
      console.log('confirm result: ok');
    } else {
      console.log('confirm result: cancel');
    }
  };
  const handleAlert = () => {
    alert({ title: 'Alert Title', children: 'Alert Content' });
  };
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <button onClick={handleConfirm}>confirm</button>
      <button onClick={handleAlert}>alert</button>
      <ConfirmRoot />
    </div>
  );
}

export default App;
