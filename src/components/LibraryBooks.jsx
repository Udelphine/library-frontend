const LibraryBooks = () => {
  const books = [
    { code: 'S1', title: 'Full Stack Development', price: 100 },
    { code: 'S2', title: 'Software Development', price: 190 },
    { code: 'S3', title: 'Software Engineering', price: 50 },
  ]

  let total = 0
  for (let i = 0; i < books.length; i++) {
    total = total + books[i].price
  }

  const cardStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '5px',
    margin: '6px 0',
  }

  return (
    <div>
      <h2>List of Books</h2>

      {books.map((book) => (
        <div key={book.code} style={cardStyle}>
          <div>{book.code}</div>
          <div>{book.title}</div>
          <div>{book.price}</div>
        </div>
      ))}

      <h3>
        The retail price for {books.length} books is {total}
      </h3>
    </div>
  )
}

export default LibraryBooks