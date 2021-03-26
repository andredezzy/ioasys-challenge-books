import { FiX } from 'react-icons/fi';
import { ImQuotesLeft } from 'react-icons/im';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';

import { Overlay, CloseButton, Container, Info } from './styles';

function BookDetailsModal({ isOpen, book, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      overlayElement={({ style: _style, ...props }, children) => (
        <Overlay {...props}>{children}</Overlay>
      )}
      contentElement={({ style: _style, ...props }, children) => (
        <>
          <CloseButton onClick={onClose}>
            <FiX size={24} strokeWidth={1.5} />
          </CloseButton>

          <Container {...props}>{children}</Container>
        </>
      )}
      onRequestClose={onClose}
    >
      {book && (
        <>
          <img src={book.imageUrl} alt={book.title} />

          <Info>
            <header>
              <h1>{book.title}</h1>
              <h2>{book.authors && book.authors.join(', ')}</h2>
            </header>

            <footer>
              <h1>INFORMAÇÕES</h1>

              <div>
                <strong>Páginas</strong>
                <span>{book.pageCount} páginas</span>
              </div>

              <div>
                <strong>Editora</strong>
                <span>{book.publisher}</span>
              </div>

              <div>
                <strong>Publicação</strong>
                <span>{book.published}</span>
              </div>

              <div>
                <strong>Idioma</strong>
                <span>{book.language}</span>
              </div>

              <div>
                <strong>Titulo Original</strong>
                <span>{book.title}</span>
              </div>

              <div>
                <strong>ISBN-10</strong>
                <span>{book.isbn10}</span>
              </div>

              <div>
                <strong>ISBN-13</strong>
                <span>{book.isbn13}</span>
              </div>
            </footer>

            <div>
              <h1>RESENHA DA EDITORA</h1>

              <p>
                <ImQuotesLeft size={28} />
                {book.description}
              </p>
            </div>
          </Info>
        </>
      )}
    </ReactModal>
  );
}

BookDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    pageCount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isbn10: PropTypes.string.isRequired,
    isbn13: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    published: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func,
};

BookDetailsModal.defaultProps = {
  book: {},
  onClose: () => {},
};

export default BookDetailsModal;
