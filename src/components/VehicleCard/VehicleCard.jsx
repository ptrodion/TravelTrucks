import {
  CardHeader,
  CardHeaderItem,
  CardHeaderParagraph,
  ListImg,
  WrapperBlock,
  WrapperList,
} from './VehicleCard.styled.jsx';
import FavoriteIcon from '../../assets/icons/Favorite/Favorite.jsx';

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
  } = vehicle;

  return (
    <WrapperList key={id}>
      {gallery && gallery.length > 0 && (
        <ListImg
          src={gallery[0].original}
          alt={name}
          style={{ width: '292px', height: '320px' }}
        />
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
        <ul>
          <li>
            <p>{rating}</p>
          </li>
          <li>
            <p>{reviews.length} (Reviews)</p>
          </li>
          <li>
            <p>{location}</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>{transmission}</p>
          </li>
          <li>
            <p>{engine}</p>
          </li>
          <li>
            <p>{kitchen}</p>
          </li>
          <li>
            <p>{AC}</p>
          </li>
        </ul>
      </WrapperBlock>
    </WrapperList>
  );
};

export default VehicleCard;
