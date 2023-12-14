import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import CocktailInfo from '../component/CocktailInfo';

const DrinksOfGlasses = () => {

    const { glassName } = useParams();

    const [cocktails, setCocktails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formattedGlassName = glassName.replace(" ", "_");
                const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${formattedGlassName}`);
                const cocktailsResponseData = await cocktailsResponse.json();
                setCocktails(cocktailsResponseData.drinks);
            } catch (error) {
                console.error('Error fetching cocktails:', error.message);
                setError(error.message);
            }
        };

        fetchData();
    }, [glassName]);

    return (
        <div>
            <Header />
            <h2 className="title">All the cocktails served in {glassName.replace("_", " ")}</h2>
            <div className="itemsBox">
            <CocktailInfo />
            </div>
            <Footer />
        </div>
    )
};

export default DrinksOfGlasses;