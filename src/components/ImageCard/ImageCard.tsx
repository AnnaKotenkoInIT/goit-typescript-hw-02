import { Image, OnImageClick } from '../../types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  onClick: OnImageClick;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        key={image.id}
        style={{ cursor: 'pointer' }}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
