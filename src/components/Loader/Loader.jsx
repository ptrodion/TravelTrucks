import { FadeLoaderWrapper } from './LoaderStyled';
import { FadeLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <FadeLoaderWrapper>
      <FadeLoader color="#76778a" height="10px" width="10px" radius="10px" />
    </FadeLoaderWrapper>
  );
};
