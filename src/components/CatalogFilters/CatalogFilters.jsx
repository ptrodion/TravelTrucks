import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/filtersSlice.jsx';
import Button from '../Button/Button.jsx';
import AcIcon from '../../assets/icons/AC/Ac.jsx';

const CatalogFilters = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFiltersChange = (name) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: !prevFilters[name],
    }));
  };

  const dispatch = useDispatch();
  // const handleFilterChange = evt => dispatch(filter(filtersData));

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtersData = { location, ...filters };

    console.log(filtersData);
    onSubmit(filtersData);
    dispatch(filter(filtersData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Location
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="City"
        />
      </div>

      <div>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button
            type="button"
            onClick={() => handleFiltersChange('ac')}
            icon={<AcIcon />}
            innerContent="AC"
          />
          <Button
            type="button"
            onClick={() => handleFiltersChange('automatic')}
            icon={<AcIcon />}
            innerContent="Automatic"
          />
          <Button
            type="button"
            onClick={() => handleFiltersChange('kitchen')}
            icon={<AcIcon />}
            innerContent="Kitchen"
          />
          <Button
            type="button"
            onClick={() => handleFiltersChange('tv')}
            icon={<AcIcon />}
            innerContent="TV"
          />
          <Button
            type="button"
            onClick={() => handleFiltersChange('bathroom')}
            icon={<AcIcon />}
            innerContent="Bathroom"
          />
        </div>
      </div>

      <div>
        <p>Vehicle type</p>
        <Button
          type="button"
          onClick={() => handleFiltersChange('van')}
          icon={<AcIcon />}
          innerContent="Van"
        />
        <Button
          type="button"
          onClick={() => handleFiltersChange('fullyIntegrated')}
          icon={<AcIcon />}
          innerContent="Fully Integrated"
        />
        <Button
          type="button"
          onClick={() => handleFiltersChange('alcove')}
          icon={<AcIcon />}
          innerContent="Alcove"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default CatalogFilters;
