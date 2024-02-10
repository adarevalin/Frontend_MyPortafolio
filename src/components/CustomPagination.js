import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';



function CustomPagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
      />
      {items}
      <Pagination.Next
        onClick={() =>
          handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
        }
      />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );
}

export default CustomPagination;
