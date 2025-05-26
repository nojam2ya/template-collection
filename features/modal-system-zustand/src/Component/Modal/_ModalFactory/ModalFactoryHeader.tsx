import type { ModalFactoryHeaderProps } from './ModalFactory.types.ts';
import { StyledModalFactoryHeader } from './ModalFactory.styles.ts';

const ModalFactoryHeader: React.FC<ModalFactoryHeaderProps> = ({ title, onClose }) => {
  return (
    <StyledModalFactoryHeader className="modal-header">
      <h5>{title}</h5>
      <button type="button" onClick={onClose}>
        닫기
      </button>
    </StyledModalFactoryHeader>
  );
};

export default ModalFactoryHeader;
