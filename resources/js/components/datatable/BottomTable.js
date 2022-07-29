import React from 'react';
import PaginationLength from './PaginationLength';
import Pagination from './Pagination';

export default function BottomTable(props) {
    return (
        <div className="datatable-bottom">
            <PaginationLength selectedValue={props.perPage} handlePaginationLength={props.handlePaginationLength} />
            <Pagination
                pageCount={props.pageCount}
                handlePageClick={props.handlePageClick}
                forcePage={props.forcePage}
            />
        </div>
    );

}
