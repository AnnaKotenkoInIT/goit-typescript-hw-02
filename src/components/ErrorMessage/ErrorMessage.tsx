import s from './ErrorMessage.module.css';

const ErrorMessage: React.FC = (): JSX.Element => {
  return <p className={s.errorText}>Please, type what you want to find!</p>;
};

export default ErrorMessage;
