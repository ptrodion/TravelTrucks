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
import { Wrapper, WrapperBlockList } from './Catalog.styled.jsx';
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters.jsx';
import { Loader } from '../../components/Loader/Loader.jsx';
import VehicleCard from '../../components/VehicleCard/VehicleCard.jsx';

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

  // let isDisabledButtonMore = true;
  // if (page < Math.ceil(total / limit)) {
  //   isDisabledButtonMore = false;
  // }

  let isDisabledButtonMore = page >= Math.ceil(total / limit);

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

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {error}
      <CatalogFilters />
      <WrapperBlockList>
        {listOfVehicles.length > 0
          ? listOfVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
          : !isLoading && <p>No campers available.</p>}
        <button
          onClick={handleLoadMore}
          disabled={isLoading || isDisabledButtonMore}
        >
          Load More
        </button>
      </WrapperBlockList>
    </Wrapper>
  );
};

export default CatalogList;
