import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import BookCard from '../../../components/BookCard';
import BookCardSkeleton from '../../../components/BookCard/Skeleton';
import BookDetailsModal from '../../../components/BookDetailsModal';
import IconButton from '../../../components/Button/Icon';
import api from '../../../services/api';

import { Container, List, Pagination } from './styles';

function BooksList() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);

      const response = await api.get('/books', {
        params: { page, amount: 12 },
      });

      const { data, totalPages: newTotalPages } = response.data;

      setBooks(data);
      setTotalPages(Math.ceil(newTotalPages));

      setLoading(false);
    }

    loadBooks();
  }, [page]);

  function openBookDetails(book) {
    setBookDetails(book);
  }

  function previousPage() {
    setPage(state => state - 1);
  }

  function nextPage() {
    setPage(state => state + 1);
  }

  return (
    <>
      <Container>
        <List>
          {loading
            ? [...Array(6).keys()].map(key => <BookCardSkeleton key={key} />)
            : books.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={() => openBookDetails(book)}
                />
              ))}
        </List>

        <Pagination>
          <span>
            Página <strong>{page}</strong> de <strong>{totalPages}</strong>
          </span>

          <IconButton
            icon={FiChevronLeft}
            onClick={previousPage}
            disabled={page === 1}
          />
          <IconButton
            icon={FiChevronRight}
            onClick={nextPage}
            disabled={page === totalPages}
          />
        </Pagination>
      </Container>

      <BookDetailsModal
        isOpen={!!bookDetails}
        book={bookDetails}
        onClose={() => setBookDetails(null)}
      />
    </>
  );
}

export default BooksList;
