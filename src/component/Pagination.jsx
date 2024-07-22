import React from 'react'
import './CompoCss/Pagination.css'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button onClick={() => onPageChange(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
                <button className='pagi-next'>Next</button>
            </>
        </nav>
    )
}

export default Pagination
