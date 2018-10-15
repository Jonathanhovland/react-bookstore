import React from 'react';

const BookList = ({books}) => {
    return books.map((book, i) => {
        return(
            <div className="list-group-item" key={i}>
                <div className="column">
                    <div className="col-md-8">Id: {book.id}</div>
                    <div className="col-md-8">Title: {book.title}</div>
                    <div className="col-md-2">Author: {book.author}</div>
                    <div className="col-md-2">Pages: {book.pages}</div>
                    <div className="col-md-2">Price: ${book.price}</div>
                </div>
            </div>
        )
    })
}

export default BookList;
