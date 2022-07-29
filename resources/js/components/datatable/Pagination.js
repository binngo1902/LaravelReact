import React from 'react';
import ReactPaginate from 'react-paginate';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
export default function Pagination(props) {
    return (
        <ReactPaginate
            previousLabel={<FaChevronLeft className="text-blue"/>}
            nextLabel={<FaChevronRight className="text-blue"/>}
            breakLabel={'...'}

            pageCount={props.pageCount || 10}
            marginPagesDisplayed={props.marginPagesDisplayed || 2}
            pageRangeDisplayed={props.pageRangeDisplayed || 5}

            initialPage={props.initialPage || 0}
            onPageChange={props.handlePageClick}
            disableInitialCallback={true}

            containerClassName={'pagination'}
            activeClassName={'active'}

            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}

            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}

            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}

            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
        />
    );

}
