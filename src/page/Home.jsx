import {useEffect, useState} from 'react';
import LastFourCocktails from '../composant/LastFourCocktails';
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import RandomCategory from '../composant/RandomCategory';


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