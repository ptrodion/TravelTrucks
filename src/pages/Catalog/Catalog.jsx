import CatalogFilters from '../../components/CatalogFilters/CatalogFilters.jsx';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import { WrapperPageCatalog } from './CatalogStyled.jsx';

const Catalog = () => {
  return (
    <WrapperPageCatalog>
      <CatalogFilters />
      <CatalogList />
    </WrapperPageCatalog>
  );
};

export default Catalog;
