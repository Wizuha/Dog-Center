import React from "react";
import "./Pagination.css";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  const pages = [];
  const maxButtons = 5;

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const getPaginationButtons = () => {
    const start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);
    return pages.slice(start - 1, end);
  };

  return (
    <div className="pagination">
      {getPaginationButtons().map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
