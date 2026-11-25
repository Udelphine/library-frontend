import './App.css'
import { Routes, Route } from 'react-router-dom'
import LibraryHeader from './components/LibraryHeader'
import LibraryLogin from './components/LibraryLogin'
import Office from './components/Office'
import OfficeList from './components/OfficeList'
import LibraryBooks from './components/LibraryBooks'

function App() {
  return (
    <div>
      <LibraryHeader />
      <Routes>
        <Route path="/" element={<LibraryLogin />} />
        <Route path="/office" element={<Office />} />
        <Route path="/offices" element={<OfficeList />} />
        <Route path="/books" element={<LibraryBooks />} />
        <Route path="*" element={<LibraryLogin />} />
      </Routes>
    </div>
  )
}

export default App