import React from 'react';
import s from './pagination.module.css';

const Pagination = (props) => {
 
    let totalQuantityPages = Math.ceil(props.totalCount / props.pageSize); 
    let arrItems = [];

    for(let i = 1; i <= totalQuantityPages; i++)
    	arrItems.push(i);

    let pageItems =  arrItems.map((num, i) => {
    	return <span className={(props.currentPage === num) ? s.activePage : null} key={i} onClick={(e) => {props.onPageChange(num)} }>{num} </span>
    });

	return (
            <>
             {pageItems}
            </>
		);

};

export default Pagination;