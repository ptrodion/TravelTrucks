import {
  CardHeader,
  CardHeaderItem,
  CardHeaderParagraph,
  CardReviews,
  CharacteristicsItem,
  CharacteristicsList,
  Description,
  ListImg,
  Location,
  Rating,
  WrapperBlock,
  WrapperList,
} from './VehicleCard.styled.jsx';
import FavoriteIcon from '../../assets/icons/Favorite/Favorite.jsx';
import StarIcon from '../../assets/icons/Star/Star.jsx';
import LocationIcon from '../../assets/icons/Location/Location.jsx';
import { StylesMainButton } from '../../GlobalStyle.jsx';
import AcIcon from '../../assets/icons/AC/Ac.jsx';
import KitchenIcon from '../../assets/icons/Kitchen/Kitchen.jsx';
import AutomaticIcon from '../../assets/icons/Automatic/Automatic.jsx';
import PetrolIcon from '../../assets/icons/Petrol/Petrol.jsx';
import RadioIcon from '../../assets/icons/Radio/Radio.jsx';
import BathroomIcon from '../../assets/icons/Bathroom/Bathroom.jsx';
import RefrigeratorIcon from '../../assets/icons/Refrigerator/Refrigerator.jsx';
import GasIcon from '../../assets/icons/Gas/Gas.jsx';
import WaterIcon from '../../assets/icons/Water/Water.jsx';
import MicrowaveIcon from '../../assets/icons/Microwave/Microwave.jsx';

const VehicleCard = ({ vehicle }) => {
  const {
    id,
    AC,
    engine,
    gallery,
    kitchen,
    name,
    price,
    transmission,
    rating,
    reviews,
    location,
    description,
    radio,
    bathroom,
    refrigerator,
    microwave,
    gas,
    water,
  } = vehicle;

  const formatLocation = (location) => {
    const parts = location.split(',').map((part) => part.trim());
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return ''; // Защита от некорректных значений
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <WrapperList key={id}>
      {gallery && gallery.length > 0 && (
        <ListImg src={gallery[0].original} alt={name} />
      )}
      <WrapperBlock>
        <CardHeader>
          <li>
            <CardHeaderParagraph>{name}</CardHeaderParagraph>
          </li>
          <CardHeaderItem>
            <CardHeaderParagraph>${price} </CardHeaderParagraph>
            <FavoriteIcon />
          </CardHeaderItem>
        </CardHeader>
        <CardReviews>
          <li>
            <StarIcon />
          </li>
          <Rating>
            <p>{rating}</p>
            <p>({reviews.length} Reviews)</p>
          </Rating>
          <Location>
            <LocationIcon width="16" height="16" />
            <p>{formatLocation(location)}</p>
          </Location>
        </CardReviews>
        <Description>{description}</Description>
        <CharacteristicsList>
          {transmission && (
            <CharacteristicsItem>
              <AutomaticIcon width="20" height="20" />
              <p>{capitalizeFirstLetter(transmission)}</p>
            </CharacteristicsItem>
          )}
          {engine && (
            <CharacteristicsItem>
              <PetrolIcon />
              <p>{capitalizeFirstLetter(engine)}</p>
            </CharacteristicsItem>
          )}
          {kitchen && (
            <CharacteristicsItem>
              <KitchenIcon width="20" height="20" />
              <p>Kitchen</p>
            </CharacteristicsItem>
          )}
          {AC && (
            <CharacteristicsItem>
              <AcIcon width="20" height="20" />
              <p>AC</p>
            </CharacteristicsItem>
          )}
          {radio && (
            <CharacteristicsItem>
              <RadioIcon />
              <p>Radio</p>
            </CharacteristicsItem>
          )}
          {bathroom && (
            <CharacteristicsItem>
              <BathroomIcon width="20" height="20" />
              <p>Bathroom</p>
            </CharacteristicsItem>
          )}
          {refrigerator && (
            <CharacteristicsItem>
              <RefrigeratorIcon />
              <p>Refrigerator</p>
            </CharacteristicsItem>
          )}
          {microwave && (
            <CharacteristicsItem>
              <MicrowaveIcon />
              <p>Microwave</p>
            </CharacteristicsItem>
          )}
          {gas && (
            <CharacteristicsItem>
              <GasIcon />
              <p>Gas</p>
            </CharacteristicsItem>
          )}
          {water && (
            <CharacteristicsItem>
              <WaterIcon />
              <p>Water</p>
            </CharacteristicsItem>
          )}
        </CharacteristicsList>
        <StylesMainButton>Show more</StylesMainButton>
      </WrapperBlock>
    </WrapperList>
  );
};

export default VehicleCard;
