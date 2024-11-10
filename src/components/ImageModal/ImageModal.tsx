import { useEffect } from 'react';
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
  // Використовуємо useEffect для блокування прокрутки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // При демонтажі компонента скидаємо overflow
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
