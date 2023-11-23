import React, { useState, useEffect } from 'react'
import BookCards from '../components/BookCards';

function BestSellerBooks() {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:8080/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    }, [])
  return (
    <BookCards books={books} headline="Best seller books"/>
  )
}

export default BestSellerBooks;