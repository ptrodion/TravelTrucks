import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearVehicles, setPage } from '../../redux/vehiclesSlice.jsx';
import {
  fetchFilteredVehicles,
  fetchVehicles,
} from '../../redux/operations.jsx';
import {
  selectError,
  selectIsLoading,
  selectListOfVehicles,
  selectLimit,
  selectTotal,
  selectFilters,
  selectPage,
} from '../../redux/selector.jsx';
import { ListImg, Wrapper, WrapperList } from './CatalogList.styled.jsx';

const CatalogList = () => {
  const dispatch = useDispatch();
  const listOfVehicles = useSelector(selectListOfVehicles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const { total } = useSelector(selectTotal);

  // const [currentPage, setCurrentPage] = useState(1);

  let isDisabledButtonMore = true;
  if (page < Math.ceil(total / limit)) {
    isDisabledButtonMore = false;
  }

  console.log(total);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(fetchFilteredVehicles({ filters, page, limit }));
    } else {
      dispatch(fetchVehicles({ page, limit }));
    }

    return () => {
      dispatch(clearVehicles());
    };
  }, [page, filters, dispatch]);

  const heandleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  // useEffect(() => {
  //   dispatch(fetchVehicles({ page, limit }));
  //   return () => {
  //     dispatch(clearVehicles());
  //   };
  // }, [page]);

  // // console.log("total", total);

  // const heandleLoadMore = () => {
  //   dispatch(setPage(page + 1));
  //   dispatch(fetchVehicles({ filters, page, limit }));
  // };

  return (
    <Wrapper>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
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
            )
          )
        : !isLoading && <p>No campers available.</p>}
      <button
        onClick={heandleLoadMore}
        disabled={isLoading || isDisabledButtonMore}
      >
        Load More
      </button>
    </Wrapper>
  );
};

export default CatalogList;
