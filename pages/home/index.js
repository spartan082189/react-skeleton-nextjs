import withLayout from 'hoc/withLayout';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

const Home = () => {
  return (
    <div>
     hero stoof
    </div>
  );
};

Home.propTypes = {
};

export default compose(
  withLayout
)(Home);