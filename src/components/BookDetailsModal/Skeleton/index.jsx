import { FiX } from 'react-icons/fi';
import { ImQuotesLeft } from 'react-icons/im';
import Skeleton from 'react-loading-skeleton';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';

import { Overlay, CloseButton, Container, Info } from '../styles';

import { ImageSkeletonContainer, QuotesSkeletonContainer } from './styles';

function BookDetailsModalSkeleton({ isOpen, onClose }) {
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
      <ImageSkeletonContainer>
        <Skeleton />
      </ImageSkeletonContainer>

      <Info>
        <header>
          <Skeleton width="100%" height={32} />
          <Skeleton width="75%" height={18} style={{ marginTop: 8 }} />
        </header>

        <footer>
          <h1>INFORMAÇÕES</h1>

          <div>
            <strong>Páginas</strong>
            <span>
              <Skeleton width={32} height={18} style={{ marginRight: 8 }} />{' '}
              páginas
            </span>
          </div>

          <div>
            <strong>Editora</strong>
            <span>
              <Skeleton width={64} height={18} />
            </span>
          </div>

          <div>
            <strong>Publicação</strong>
            <span>
              <Skeleton width={40} height={18} />
            </span>
          </div>

          <div>
            <strong>Idioma</strong>
            <span>
              <Skeleton width={48} height={18} />
            </span>
          </div>

          <div>
            <strong>Titulo Original</strong>
            <span>
              <Skeleton width={96} height={18} />
            </span>
          </div>

          <div>
            <strong>ISBN-10</strong>
            <span>
              <Skeleton width={48} height={18} />
            </span>
          </div>

          <div>
            <strong>ISBN-13</strong>
            <span>
              <Skeleton width={56} height={18} />
            </span>
          </div>
        </footer>

        <div>
          <h1>RESENHA DA EDITORA</h1>

          <p>
            <QuotesSkeletonContainer>
              <ImQuotesLeft size={28} />
              <Skeleton width="99%" height={18} />
            </QuotesSkeletonContainer>

            <Skeleton width="99%" count={8} />
          </p>
        </div>
      </Info>
    </ReactModal>
  );
}

BookDetailsModalSkeleton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

BookDetailsModalSkeleton.defaultProps = {
  onClose: () => {},
};

export default BookDetailsModalSkeleton;
