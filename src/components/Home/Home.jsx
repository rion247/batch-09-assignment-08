import BookPage from "../BookPage/BookPage";
import HeroBanner from "../HeroBanner/HeroBanner";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="border border-transparent py-20 px-60 mb-24">
                <HeroBanner></HeroBanner>
            </div>

            <div className="container mx-auto">
                <BookPage></BookPage>
            </div>
        </div>
    );
};

export default Home;