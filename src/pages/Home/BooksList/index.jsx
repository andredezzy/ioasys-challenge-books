import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import BookCard from '../../../components/BookCard';
import BookCardSkeleton from '../../../components/BookCard/Skeleton';
import IconButton from '../../../components/Button/Icon';
import api from '../../../services/api';
import formatToKebabCase from '../../../utils/formatToKebabCase';

import BookDetails from './BookDetails';
import { Container, List, Pagination } from './styles';

function BooksList() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const history = useHistory();

  useEffect(() => {
    async function loadBooks() {
      setIsLoading(true);

      const response = await api.get('/books', {
        params: { page, amount: 12 },
      });

      const { data, totalPages: newTotalPages } = response.data;

      setBooks(data);
      setTotalPages(Math.ceil(newTotalPages));

      setIsLoading(false);
    }

    loadBooks();
  }, [page]);

  function openBookDetails(book) {
    const titleKebabCase = formatToKebabCase(book.title);

    history.push(`/books/${book.id}/${titleKebabCase}`);
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
          {isLoading
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

      <BookDetails />
    </>
  );
}

export default BooksList;
