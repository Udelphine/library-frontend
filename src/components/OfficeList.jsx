import { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryButton from './LibraryButton';

const OfficeList = () => {
  const [offices, setOffices] = useState([]);
  const [search, setSearch] = useState('');

  async function loadOffices() {
    try {
      const response = await axios.get('http://localhost:8084/api/offices');
      setOffices(response.data);
    } catch (error) {
      console.log(error);
      alert('The offices could not be loaded');
    }
  }

  useEffect(() => {
    loadOffices();
  }, []);

  async function deleteOffice(id) {
    const confirmed = window.confirm('Do you want to delete this office?');
    if (!confirmed) return;

    try {
      const response = await axios.delete(
        `http://localhost:8084/api/offices/${id}`,
      );

      if (response.status === 200) {
        alert('The office is deleted successfully');
        loadOffices();
      } else {
        alert('The office not deleted');
      }
    } catch (error) {
      console.log(error);
      alert('The office not deleted');
    }
  }

  const filteredOffices = offices.filter((office) => {
    const text = search.toLowerCase();
    const name = (office.name || '').toLowerCase();
    const number = (office.roomNumber || '').toLowerCase();
    return name.includes(text) || number.includes(text);
  });

  const cellStyle = { border: '1px solid gray', padding: '8px' };

  return (
    <div>
      <h1>Offices</h1>

      <label>Search:</label>{' '}
      <input
        type="text"
        placeholder="Search by office name or number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />

      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={cellStyle}>No</th>
            <th style={cellStyle}>Office Name</th>
            <th style={cellStyle}>Office Number</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map((office, index) => (
            <tr key={office.id}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{office.name || '-'}</td>
              <td style={cellStyle}>{office.roomNumber}</td>
              <td style={cellStyle}>
                <LibraryButton buttonLabel="Update" />{' '}
                <LibraryButton
                  buttonLabel="Delete"
                  onClickButton={() => deleteOffice(office.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredOffices.length === 0 && <p>No office found</p>}
    </div>
  );
};

export default OfficeList;