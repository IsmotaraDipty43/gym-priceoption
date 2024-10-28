import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, price,features} = option;
    return (
        <div className='bg-blue-500 text-white rounded-lg p-4 flex flex-col'> 
            <h2 className='text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='mt-3 text-center text-2xl font-bold'>{name}</h4>
           < div className='pl-6 flex-grow'>
           {
                features.map((feature,idx) => <Features feature ={feature} key={idx}></Features>)
            }
           </div>
            < button className='mt-12 bg-green-500 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;
