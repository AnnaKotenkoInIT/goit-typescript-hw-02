import Modal from 'react-modal';
import { Image } from '../../types';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;

  return (
    <Modal
      className={s.modalContainer}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      contentLabel="Image modal"
      shouldCloseOnOverlayClick={true}
    >
      {image && (
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className={s.img}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
