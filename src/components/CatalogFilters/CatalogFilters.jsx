import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';
import AcIcon from '../../assets/icons/AC/Ac.jsx';
import { fetchFilteredVehicles } from '../../redux/operations.jsx';
import {
  ButtonSearch,
  Form,
  InputLocation,
  ParagraphFilter,
  ParagraphFilterEquipment,
  ParagraphLocation,
  WrapperFilters,
  WrapperLocationBlock,
  WrapperLocationGeneral,
} from './CatalogFilters.styled.jsx';
import LocationIcon from '../../assets/icons/Location/Location.jsx';
import AutomaticIcon from '../../assets/icons/Automatic/Automatic.jsx';
import KitchenIcon from '../../assets/icons/Kitchen/Kitchen.jsx';
import TVIcon from '../../assets/icons/TV/TV.jsx';
import BathroomIcon from '../../assets/icons/Bathroom/Bathroom.jsx';
import VanIcon from '../../assets/icons/Van/Van.jsx';
import FullyIntegratedIcon from '../../assets/icons/FullyIntegrated/FullyIntegrated.jsx';
import AlcoveIcon from '../../assets/icons/Alcove/Alcove.jsx';
import { selectLimit } from '../../redux/selector.jsx';
import { setFilters, setPage } from '../../redux/vehiclesSlice.jsx';

const CatalogFilters = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);

  const [location, setLocation] = useState('');
  const [vehicleEquipment, setVehicleEquipment] = useState({
    AC: false,
    transmission: null,
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const [vehicleType, setVehicleType] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleVehicleEquipmentChange = (name, value = null) => {
    setVehicleEquipment((prevFilters) => {
      if (name === 'transmission') {
        return {
          ...prevFilters,
          transmission: prevFilters.transmission === value ? null : value,
        };
      }

      if (value !== null) {
        return {
          ...prevFilters,
          [name]: prevFilters[name] === value ? null : value,
        };
      }
      return {
        ...prevFilters,
        [name]: !prevFilters[name],
      };
    });
  };

  const handlevehicleTypeChange = (type) => {
    setVehicleType((prevType) => (prevType === type ? null : type));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const activeFilters = Object.entries(vehicleEquipment)
      .filter(([, value]) => value)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const newFiltersData = { ...activeFilters };

    if (location.trim()) {
      newFiltersData.location = location;
    }

    if (vehicleType) {
      newFiltersData.form = vehicleType;
    }

    dispatch(setFilters(newFiltersData));
    dispatch(setPage(1));

    dispatch(fetchFilteredVehicles({ newFiltersData, page: 1, limit }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <WrapperLocationGeneral>
        <ParagraphLocation>Location</ParagraphLocation>
        <WrapperLocationBlock>
          <LocationIcon />
          <InputLocation
            type="text"
            name="location"
            onChange={handleLocationChange}
            placeholder="City"
          />
        </WrapperLocationBlock>
      </WrapperLocationGeneral>

      <div>
        <ParagraphFilter>Filters</ParagraphFilter>
        <ParagraphFilterEquipment>Vehicle equipment</ParagraphFilterEquipment>
        <WrapperFilters>
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('AC')}
            icon={<AcIcon />}
            innerContent="AC"
            toggleEquipment={true}
          />
          <Button
            type="button"
            onClick={() =>
              handleVehicleEquipmentChange('transmission', 'automatic')
            }
            icon={<AutomaticIcon />}
            innerContent="Automatic"
            toggleEquipment={true}
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('kitchen')}
            icon={<KitchenIcon />}
            innerContent="Kitchen"
            toggleEquipment={true}
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('TV')}
            icon={<TVIcon />}
            innerContent="TV"
            toggleEquipment={true}
          />
          <Button
            type="button"
            onClick={() => handleVehicleEquipmentChange('bathroom')}
            icon={<BathroomIcon />}
            innerContent="Bathroom"
            toggleEquipment={true}
          />
        </WrapperFilters>
      </div>

      <div>
        <ParagraphFilterEquipment>Vehicle type</ParagraphFilterEquipment>
        <WrapperFilters>
          <Button
            type="button"
            onClick={() => handlevehicleTypeChange('van')}
            icon={<VanIcon />}
            innerContent="Van"
            toggleType={true}
          />
          <Button
            type="button"
            onClick={() => handlevehicleTypeChange('fullyIntegrated')}
            icon={<FullyIntegratedIcon />}
            innerContent="Fully Integrated"
            toggleType={true}
          />
          <Button
            type="button"
            onClick={() => handlevehicleTypeChange('alcove')}
            icon={<AlcoveIcon />}
            innerContent="Alcove"
            toggleType={true}
          />
        </WrapperFilters>
      </div>
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
};

export default CatalogFilters;
