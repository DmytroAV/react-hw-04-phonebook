import PropTypes from 'prop-types';
import { Container } from './Message.styled';

export function Message({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
