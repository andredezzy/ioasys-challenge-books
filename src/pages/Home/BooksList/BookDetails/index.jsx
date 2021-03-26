import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import BookDetailsModal from '../../../../components/BookDetailsModal';
import BookDetailsModalSkeleton from '../../../../components/BookDetailsModal/Skeleton';
import api from '../../../../services/api';

function BookDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [book, setBook] = useState();

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!params.id) {
      return;
    }

    setIsModalOpen(true);

    async function loadBook() {
      setIsLoading(true);

      const response = await api.get(`/books/${params.id}`);

      setBook(response.data);

      setIsLoading(false);
    }

    loadBook();
  }, [params]);

  function closeBookDetails() {
    setIsModalOpen(false);
    setBook(null);

    history.push('/');
  }

  return isLoading ? (
    <BookDetailsModalSkeleton
      isOpen={isModalOpen}
      isLoading={isLoading}
      onClose={closeBookDetails}
    />
  ) : (
    <>
      {isModalOpen && (
        <BookDetailsModal
          isOpen={isModalOpen}
          book={book}
          onClose={closeBookDetails}
        />
      )}
    </>
  );
}

export default BookDetails;
