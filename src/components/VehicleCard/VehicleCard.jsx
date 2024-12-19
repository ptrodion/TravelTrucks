import { ListImg, WrapperList } from './VehicleCard.styled.jsx';

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
      <div>
        <ul>
          <li>
            <p>{name}</p>
          </li>
          <li>
            <p>{price}</p>
          </li>
        </ul>
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
      </div>
    </WrapperList>
  );
};

export default VehicleCard;
