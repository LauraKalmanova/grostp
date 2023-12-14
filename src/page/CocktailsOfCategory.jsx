import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import CocktailInfo from '../component/CocktailInfo';

const DrinksOfCategory = () => {

    const { categoryName } = useParams();
    var hasUnderscore = false;

    if (categoryName.indexOf("_")) {
        hasUnderscore = true;
    }

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + (hasUnderscore ? (categoryName.replace("_", " \/ ")) : (categoryName)));

                if (!cocktailsResponse.ok) {
                    throw new Error('Failed to fetch cocktails data');
                }
                const cocktailsResponseData = await cocktailsResponse.json();
                setCocktails(cocktailsResponseData.drinks);
            } catch (error) {
                console.error('Error fetching cocktail details:', error.message);
            }
        };

        fetchData();
    }, [categoryName]);

    return (
        <div>
            <Header />
            <h2 className="title">All the cocktails of {categoryName.replace("_", " ")} category</h2>
            <div className="itemsBox">
            <CocktailInfo />
            </div>
            <Footer />
        </div>
    )
};

export default DrinksOfCategory;