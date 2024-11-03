import { useState, ChangeEvent, FormEvent } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './SearchBar.module.css';

interface SearchBarProps {
  setQuery: (query: string) => void; // Функція, що приймає рядок
  notify: () => void; // Функція без параметрів
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery, notify }) => {
  const [inputValue, setInputValue] = useState<string>(''); // Визначаємо тип для стану

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      notify();
    } else {
      setQuery(inputValue);
      resetInput();
    }
  };

  const resetInput = () => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      notify();
    } else {
      setQuery(inputValue);
      resetInput();
    }
  };

  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputWrapper}>
            <button type="button" className={s.btn} onClick={handleButtonClick}>
              <ImSearch size={25} className={s.icon} />
            </button>
            <input
              className={s.input}
              type="text"
              onChange={handleChange}
              name="topic"
              autoComplete="off"
              autoFocus
              value={inputValue}
              placeholder="Search images and photos..."
            />
          </div>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
