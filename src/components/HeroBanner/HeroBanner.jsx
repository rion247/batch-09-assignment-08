import HeroImage from '../../assets/heroBannerImage.png'
import { Link } from 'react-router-dom';
const HeroBanner = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-between items-center lg:flex-row-reverse">
                <div className='border-2 border-neutral-300 border-dashed p-4'>
                    <img src={HeroImage} className="w-[318px] h-[394px] rounded-lg" />
                </div>

                <div>
                    <h1 className="text-6xl font-bold w-[526px] leading-[80px] mb-12 font-playfair-display">Books to freshen up your bookshelf</h1>
                    <Link to="/listedBooks" href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 font-semibold rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        View The List
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;