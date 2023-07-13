// import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

export function FormError({ message }) {
  return (
    <>
      <ErrorText>{message}</ErrorText>
    </>
  );
  // <Message name={name} render={message => <ErrorText>{message}</ErrorText>} />;
}
