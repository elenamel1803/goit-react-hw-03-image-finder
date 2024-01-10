import { Vortex } from 'react-loader-spinner';
import { LoadWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoadWrap>
      <Vortex
        visible={false}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoadWrap>
  );
};

export default Loader;
