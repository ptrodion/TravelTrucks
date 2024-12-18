import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearVehicles } from '../../redux/vehiclesSlice.jsx';
import { fetchVehicles } from '../../redux/operations.jsx';
import { Wrapper } from './CatalogListStyled.jsx';
import {
  selectError,
  selectIsLoading,
  selectListOfVehicles,
} from '../../redux/selector.jsx';

const CatalogList = () => {
  const dispatch = useDispatch();
  const listOfVehicles = useSelector(selectListOfVehicles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const { listOfVehicles, isLoading, error } = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
    return () => {
      dispatch(clearVehicles());
    };
  }, [dispatch]);

  console.log(listOfVehicles);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div>
        {listOfVehicles.length > 0
          ? listOfVehicles.map(
              ({
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
              }) => (
                <Wrapper key={id}>
                  <div>
                    {gallery && gallery.length > 0 && (
                      <img
                        src={gallery[0].original}
                        alt={name}
                        style={{ width: '292px', height: '320px' }}
                      />
                    )}
                  </div>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        <p>{name}</p>
                      </li>
                      <li>
                        {' '}
                        <p>{price}</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        {' '}
                        <p>{rating}</p>
                      </li>
                      <li>
                        {' '}
                        <p>{reviews.length} (Reviews)</p>
                      </li>
                      <li>
                        {' '}
                        <p>{location}</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        {' '}
                        <p>{transmission}</p>
                      </li>
                      <li>
                        {' '}
                        <p>{engine}</p>
                      </li>
                      <li>
                        {' '}
                        <p>{kitchen}</p>
                      </li>
                      <li>
                        {' '}
                        <p>{AC}</p>
                      </li>
                    </ul>
                  </div>
                </Wrapper>
              )
            )
          : !isLoading && <p>No campers available.</p>}
      </div>
    </div>
  );
};

export default CatalogList;
