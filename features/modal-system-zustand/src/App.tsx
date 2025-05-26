import { ModalRoot, useModal } from '@/Component/Modal';

function App() {
  const { openModal } = useModal();
  const handleOpenModal = () => openModal({ id: 'SAMPLE', type: 'SAMPLE', props: { text: 'Sample Text' } });
  return (
    <div>
      <button onClick={handleOpenModal}>open modal</button>
      <ModalRoot />
    </div>
  );
}

export default App;
