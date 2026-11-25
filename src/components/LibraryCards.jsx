import React from 'react'

function LibraryCards() {
  const books = [
    {
      code: "WEB 001",
      name: "Software Engineering",
      price: 1000
    },
    {
      code: "WEB 002",
      name: "Web Development",
      price: 2000
    },
    {
      code: "WEB 003",
      name: "Database Management System",
      price: 3000
    }
  ]

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", margin: "20px 0" }}>
      {
        books.map(book => (
          <div
            key={book.code}
            style={{ border: "2px solid gray", borderRadius: "8px", padding: "15px", width: "220px" }}
          >
            <h3>{book.name}</h3>
            <p>Code: {book.code}</p>
            <p>Price: ${book.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default LibraryCards