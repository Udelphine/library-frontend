import { Link } from 'react-router-dom'

const LibraryHeader = () => {
  return (
    <header>
      <h1>Library Management System</h1>
      <Link to="/" style={{ paddingRight: '10px' }}>
        Login
      </Link>
      <Link to="/office" style={{ paddingRight: '10px' }}>
        Office
      </Link>
      <Link to="/offices" style={{ paddingRight: '10px' }}>
        Offices List
      </Link>
      <Link to="/books" style={{ paddingRight: '10px' }}>
        Books
      </Link>
    </header>
  )
}

export default LibraryHeader