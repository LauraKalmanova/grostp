import LastFourCocktails from '../component/LastFourCocktails';
import Header from '../component/Header';
import Footer from '../component/Footer';
import RandomCategory from '../component/RandomCategory';


const Home = () => {
    return (
        <>
            <Header />
            <LastFourCocktails />
            <RandomCategory />
            <Footer />
        </>
    )
};

export default Home;