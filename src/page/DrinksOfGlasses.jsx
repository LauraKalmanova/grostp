import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Header from '../composant/Header';
import Footer from '../composant/Footer';
import {Link} from 'react-router-dom';

const DrinksOfGlasses = () => {

    const {glassName} = useParams();

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glassName);
            const cocktailsResponseData = await cocktailsResponse.json();
            setCocktails(cocktailsResponseData.drinks);    
        })(); 
    }, []);

    return (
        <div>
            <Header />
                {cocktails ? (
                    cocktails.map((cocktail) => {
                        return (
                            <article>
                                <h2>{cocktail.strDrink}</h2>
                                <Link to={`/cocktail/details/${cocktail.idDrink}`}><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /></Link>
                            </article>
                        )
                    })
                ) : (
                    <p>Cocktails are loading</p>
                )}
            <Footer />
        </div>
    )
};

export default DrinksOfGlasses;