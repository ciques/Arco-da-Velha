import React from "react";

import ReactPaginate from "react-paginate";

export default function Pagination({ size, handleChangePage }) {
  return (
    <div>
      <ReactPaginate
        pageCount={size}
        breakLabel="..."
        nextLabel="Próximo"
        pageRangeDisplayed={5}
        previousLabel="Anterior"
        marginPagesDisplayed={1}
        activeClassName={"active"}
        breakClassName={"break-me"}
        onPageChange={handleChangePage}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
      />
    </div>
  );
}
