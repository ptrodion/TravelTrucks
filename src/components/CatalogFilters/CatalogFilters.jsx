import { useState } from 'react';

const CatalogFilters = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    location: '',
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const handleFilterChange = (event) => {
    if (event && event.target && event.target.tagName === 'BUTTON') {
      const filter = event.target.name;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filter]: !prevFilters[filter],
      }));
    }
  };

  console.log(filters);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Location
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="City"
        />
      </div>

      <div>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => handleFilterChange('AC')}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            AC
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('kitchen')}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Automatic
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('kitchen')}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Kitchen
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('kitchen')}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            TV
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('kitchen')}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Bathroom
          </button>
        </div>
      </div>

      <div>
        <p>Vehicle type</p>
        <button
          type="button"
          onClick={() => handleFilterChange('kitchen')}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          Van
        </button>

        <button
          type="button"
          onClick={() => handleFilterChange('kitchen')}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          Fully Integrated
        </button>

        <button
          type="button"
          onClick={() => handleFilterChange('kitchen')}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          Alcove
        </button>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default CatalogFilters;
