import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "There was an error, please try again...",
}: ErrorMessageProps) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
