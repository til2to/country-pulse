// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContinentCard = ({ link }) => (
  <div>
    <Link
      to={link.path}
      className="w-full h-[14rem] continent-card text-2xl font-semibold pl-3 py-5 rounded-md flex items-center justify-center gap-x-4"
    >
      {link.name}
      <div className="w-[10rem]">
        <img src={link.image} alt={link.name} className="object-contain" />
      </div>
    </Link>
  </div>
);

ContinentCard.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ContinentCard;
