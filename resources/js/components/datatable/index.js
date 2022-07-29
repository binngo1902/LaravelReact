import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import BottomTable from "./BottomTable";
import Pagination from "./Pagination";

export default function TableContainer({ ...props }) {
    const [state, setState] = useState({
        dataSource: [],
        params: [],
    });

    console.log(props.params);
    const [isActionChange, setActionChange] = useState(false);
    const loadData = async (linkApi) => {
        await axiosClient
            .get(linkApi, { params: state.params })
            .then((response) => {
                setState({
                    ...state,
                    params: {
                        ...state.params,
                        per_page: response.meta?.per_page,
                        last_page: response.meta?.last_page,
                    },
                    dataSource: response.data,
                });
            });
    };

    useEffect(() => {
        loadData(props.baseUrl);
    }, [isActionChange]);

    const handleSortClicked = (column_sort, type_sort) => {
        let next_sort = "";
        if (column_sort == state.params.column_sort) {
            if (type_sort == "" || type_sort == "desc") {
                next_sort = "asc";
            } else {
                next_sort = "desc";
            }
        } else {
            next_sort = "asc";
        }
        setState({
            ...state,
            params: {
                ...state.params,
                page: 1,
                column_sort: column_sort,
                type_sort: next_sort,
            },
        });
        setActionChange(!isActionChange);

    };
    const handlePageClick = (data) => {
        setActionChange(!isActionChange);
        setState({
            ...state,
            params: {
                ...state.params,
                page: data.selected + 1,
            },
        });
    };

    const handlePaginationLength = (e) => {
        setActionChange(!isActionChange);
        setState({
            ...state,
            params: {
                ...state.params,
                per_page: e.target.value,
            },
        });
    };

    return (
        <React.Fragment>
            {React.cloneElement(props.children, {
                dataSource: state.dataSource,
                sort: {
                    handleSortClick:handleSortClicked,
                    column_sort: state.params.column_sort,
                    type_sort: state.params.type_sort,
                },
            })}

            {!_.isEmpty(state.dataSource) && (
                <BottomTable
                    perPage={state.params?.per_page}
                    handlePaginationLength={handlePaginationLength}
                    pageCount={state.params?.last_page || 1}
                    handlePageClick={handlePageClick}
                />
            )}
        </React.Fragment>
    );
}
