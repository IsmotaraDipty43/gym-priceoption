import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
     <li key={route.id}><a href={route.path}>{route.name}</a></li>
        
    );
};

Link.propTypes = {
    route: PropTypes.shape({
        id: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Link;