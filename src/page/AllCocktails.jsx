import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const AllCocktails = () => {

    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
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
                                <p>{cocktail.strInstructions}</p>
                            </article>
                        )
                    })) : (
                            <p>Cocktails are loading</p>
                        )}
            <Footer />
        </div>
    )

};

export default AllCocktails;