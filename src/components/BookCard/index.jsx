import PropTypes from 'prop-types';

import { Container, Info } from './styles';

function BookCard({ book, ...rest }) {
  return (
    <Container {...rest}>
      <img src={book.imageUrl} alt={book.title} />

      <Info>
        <header>
          <h1>{book.title}</h1>
          {book.authors.map(author => (
            <h2>{author}</h2>
          ))}
        </header>

        <footer>
          <span>{book.pageCount} páginas</span>
          <span>Editora {book.publisher}</span>
          <span>Publicado em {book.published}</span>
        </footer>
      </Info>
    </Container>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    pageCount: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    published: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
