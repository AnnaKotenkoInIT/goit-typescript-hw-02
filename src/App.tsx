import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; // Використовуємо toast
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { Image } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    fetchImagesData(query, page);
  }, [query, page]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  const fetchImagesData = async (query: string, page: number) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const { results, total } = await fetchImages(query, page);
      setImages(prev => [...prev, ...results]);
      setTotalImages(total);
    } catch (error) {
      console.error('Error with displaying the pictures:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setHasSearched(true);
    }
  };

  const notify = () => toast.error('Please, type what you want to find!');

  const handleSetQuery = (searchValue: string) => {
    setQuery(searchValue);
    resetState();
  };

  const resetState = () => {
    setImages([]);
    setPage(1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} notify={notify} />
      <ImageGallery
        images={images}
        totalImages={totalImages}
        hasSearched={hasSearched}
        openModal={openModal}
      />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
