import { FaCircleArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Features = ({feature}) => {
    return (
        <div >

< p className="flex gap-2 text-lg pl-2  items-center"><FaCircleArrowRight className="text-xl  text-white"/> {feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature: PropTypes.string
};
export default Features;