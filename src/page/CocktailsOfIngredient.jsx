import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import CocktailInfo from '../component/CocktailInfo';

const DrinksOfIngredient = () => {
    const {ingredientName} = useParams();

    const [cocktails, setCocktails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
                const cocktailsResponseData = await cocktailsResponse.json();
  
                if (!cocktailsResponse.ok) {
                    throw new Error('Failed to fetch cocktails');
                }
  
                setCocktails(cocktailsResponseData.drinks);
            } catch (error) {
                console.error('Error fetching cocktails:', error.message);
                setError(error.message);
            }};
  
        fetchData();
    }, [ingredientName]);

    return (
        <div>
            <Header />
            <h2 className="title">All the cocktails that have {ingredientName}</h2>
            <div className="itemsBox">
            <CocktailInfo />
            </div>
            <Footer />
        </div>
    )
};

export default DrinksOfIngredient;