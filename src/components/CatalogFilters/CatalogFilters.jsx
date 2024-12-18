import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.jsx';
import AcIcon from '../../assets/icons/AC/Ac.jsx';
import { fetchFilteredVehicles } from '../../redux/operations.jsx';

const CatalogFilters = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [vehicleEquipment, setVehicleEquipment] = useState({
    AC: false,
    transmission: null,
    kitchen: false,
    TV: false,
    bathroom: false,
    // van: null,
    // fullyIntegrated: null,
    // alcove: null,
  });

  const [vehicleType, setVehicleType] = useState({
    form: null,
  });

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleVehicleEquipmentChange = (name, value = null) => {
    setVehicleEquipment((prevFilters) => {
      if (value !== null) {
        return {
          ...prevFilters,
          [name]: prevFilters[name] === value ? null : value, // Сбрасываем, если уже выбрано
        };
      }
      return {
        ...prevFilters,
        [name]: !prevFilters[name],
      };
    });
  };

  // const handlevehicleTypeChange = (type) => {
  //   setVehicleType((prevType) => ({
  //     ...prevType,
  //     form: prevType.form === type ? null : type, // Сбрасываем значение, если оно уже выбрано
  //   }));
  // };

  const handlevehicleTypeChange = (type) => {
    setVehicleType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const activeFilters = Object.entries(vehicleEquipment)
      .filter(([value]) => value)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const filtersData = { ...activeFilters };

    // Добавляем локацию, если она введена
    if (location.trim()) {
      filtersData.location = location;
    }

    if (vehicleType) {
      filtersData.form = vehicleType;
    }

    console.log(filtersData);
    dispatch(fetchFilteredVehicles(filtersData));
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
            onClick={() => handleVehicleEquipmentChange('AC')}
            icon={<AcIcon />}
            innerContent="AC"
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('automatic')}
            icon={<AcIcon />}
            innerContent="Automatic"
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('kitchen')}
            icon={<AcIcon />}
            innerContent="Kitchen"
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('TV')}
            icon={<AcIcon />}
            innerContent="TV"
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('bathroom')}
            icon={<AcIcon />}
            innerContent="Bathroom"
          />
        </div>
      </div>

      <div>
        <p>Vehicle type</p>
        <Button
          type="button"
          onClick={() => handlevehicleTypeChange('van')}
          icon={<AcIcon />}
          innerContent="Van"
        />
        <Button
          type="button"
          onClick={() => handlevehicleTypeChange('fullyIntegrated')}
          icon={<AcIcon />}
          innerContent="Fully Integrated"
        />
        <Button
          type="button"
          onClick={() => handlevehicleTypeChange('alcove')}
          icon={<AcIcon />}
          innerContent="Alcove"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default CatalogFilters;
